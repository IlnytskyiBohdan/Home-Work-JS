import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_Products } from "../constans/constans";
import axios from "axios";

// Функция API-запроса для сокращения дублирования кода
const apiRequest = async (method, url, data, thunkAPI) => {
  try {
    const response = await axios({ method, url, data });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

// Thunks
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
  return apiRequest("get", API_Products, null, thunkAPI);
});

export const addProduct = createAsyncThunk("products/addProduct", async (product, thunkAPI) => {
  return apiRequest("post", API_Products, product, thunkAPI);
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (product, thunkAPI) => {
  return apiRequest("put", `${API_Products}/${product.id}`, product, thunkAPI);
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, thunkAPI) => {
  return apiRequest("delete", `${API_Products}/${id}`, null, thunkAPI).then(() => id);
});

// Initial State
const initialState = {
  items: [],
  status: {
    loading: false,
    error: null,
  },
};

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status.loading = true;
        state.status.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.payload;
      })

      .addCase(addProduct.pending, (state) => {
        state.status.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.payload;
      })

      .addCase(updateProduct.pending, (state) => {
        state.status.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status.loading = false;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.payload;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.status.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.payload;
      });
  },
});

export default productsSlice.reducer;