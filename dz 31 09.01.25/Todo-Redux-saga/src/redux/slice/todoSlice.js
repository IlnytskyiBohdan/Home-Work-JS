import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    setTodos: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    },

    addItem: (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    },
    addTodo: (state) => {
      state.loading = true;
    },

    deleteTodo: (state) => {
      state.loading = true;
    },

    deleteItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },

    clearAll: (state) => {
      state.loading = true;
    },

    clearAllTodo: (state) => {
      state.todos = [];
      state.loading = false;
    },

    toggleCompleteTodo: (state) => {
      state.loading = false;
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = action.payload.completed;
    },

    editTodoStart: (state) => {
      state.loading = false;
    },

    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.text = action.payload.text;
    },
  },
});

export const {
  fetchStart,
  clearAllTodo,
  addTodo,
  setTodos,
  deleteItem,
  deleteTodo,
  addItem,
  clearAll,
  toggleComplete,
  toggleCompleteTodo,
  editTodo,
  editTodoStart,
} = todoSlice.actions;

