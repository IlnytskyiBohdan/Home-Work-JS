import { createSlice } from "@reduxjs/toolkit";
import API from "../constants/constants";

const initialState = {
  item: {},
  text: "",
};

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,

  reducers: {
    addSwapi: (state, action) => {
      state.item = action.payload;

      console.log(state.item);
    },

    deleteSwapi: (state) => {
      state.item = {};
      state.text = "";
    },
    updateText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addSwapi, deleteSwapi, updateText } = swapiSlice.actions;

export const getSwapi = (text) => async (dispatch) => {
  try {
    const response = await fetch(`${API}${text}`);

    const data = await response.json();
    dispatch(addSwapi(data));
  } catch (e) {
    console.error(e);
  }
};
