import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_Products } from "../constans/constans";


// Асинхронное действие для загрузки товаров
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_Products);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Добавление продукта
export const addProduct = createAsyncThunk("products/addProduct", async (product, thunkAPI) => {
  try {
    const response = await axios.post(API_Products, product);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Обновление продукта
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, thunkAPI) => {
    try {
      const response = await axios.put(`${API_Products}/${product.id}`, product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Удаление продукта
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, thunkAPI) => {
  try {
    // await axios.delete(`${API_Products}/${id}`);
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
