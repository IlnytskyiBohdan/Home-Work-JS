import { createSlice } from "@reduxjs/toolkit";
import API from "../constants/constants";

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

   

    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = action.payload.completed;
    },

    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.text = action.payload.text;
    },
  },
});

export const {
  fetchStart,
  addTodo,
  setTodos,
  deleteItem,
  deleteTodo,
  addItem,
  clearAll,
  toggleComplete,
  updateTodo,
} = todoSlice.actions;

// export const addTodo = (text) => async (dispatch) => {
//   dispatch(fetchStart());
//   try {
//     const response = await fetch(API, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });
//     const data = await response.json();
//     dispatch(addItem({ id: data.id, text, completed: false }));
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getTodo = () => async (dispatch) => {
//   dispatch(fetchStart());
//   try {
//     const response = await fetch(API);
//     const data = await response.json();
//     dispatch(setTodos(data.map((todo) => ({ ...todo, completed: todo.completed || false }))));
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const deleteTodo = (id) => async (dispatch) => {
//   dispatch(fetchStart());
//   try {
//     await fetch(`${API}/${id}`, { method: "DELETE" });
//     dispatch(getTodo());
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const clearTodos = () => async (dispatch, getState) => {
//   dispatch(fetchStart());

//   try {
//     const state = getState();
//     const todos = state.todo.todos;
//     for (const todo of todos) {
//       await fetch(`${API}/${todo.id}`, {
//         method: "DELETE",
//       });
//     }

//     dispatch(clearAll());
//   } catch (e) {
//     console.error(e);
//   }
// };

export const toggleCompleteTodo = (id) => async (dispatch, getState) => {
  try {
    const { todos } = getState().todo;
    const todo = todos.find((todo) => todo.id === id);

    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });

    const updatedTodo = await response.json();
    dispatch(toggleComplete({ id: updatedTodo.id, completed: updatedTodo.completed }));
  } catch (e) {
    console.error(e);
  }
};

export const editTodo =
  ({ id, text }) =>
  async (dispatch) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const updatedTodo = await response.json();
      dispatch(updateTodo({ id: updatedTodo.id, text: updatedTodo.text }));
    } catch (e) {
      console.error(e);
    }
  };
