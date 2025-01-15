import { all, takeEvery, call, put, select } from "redux-saga/effects";
import API from "../constants/constants";
import {
  setTodos,
  fetchStart,
  deleteTodo,
  deleteItem,
  addTodo,
  addItem,
  clearAll,
  clearAllTodo,
  toggleCompleteTodo,
  toggleComplete,
  editTodoStart,
  editTodo,
} from "../slice/todoSlice";

// Helper

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Httpp error");
    }
    return response.json();
  });
}

// Workers

function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API);

    yield put(setTodos(todos.map((todo) => ({ ...todo, completed: todo.completed || false }))));
  } catch (e) {
    console.error(e);
  }
}

function* deleteItemsSaga(action) {
  try {
    const todo = yield call(fetchHelper, `${API}/${action.payload}`, {
      method: "DELETE",
    });

    yield put(deleteItem(todo.id));
  } catch (e) {
    console.error(e);
  }
}

function* addTodoSaga(action) {
  try {
    const todos = yield call(fetchHelper, API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: action.payload }),
    });

    yield put(addItem(todos));
  } catch (e) {
    console.error(e);
  }
}

function* clearTodosSaga() {
  try {
    const todos = yield select((state) => state.todo.todos);

    for (const todo of todos) {
      yield call(fetchHelper, `${API}/${todo.id}`, { method: "DELETE" });
    }

    yield put(clearAllTodo());
  } catch (e) {
    console.error(e);
  }
}

function* toggleCompleteTodoSaga(action) {
  try {
    const { id, completed } = action.payload;

    yield call(fetchHelper, `${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });

    yield put(toggleComplete({ id, completed }));
  } catch (e) {
    console.error(e);
  }
}

function* editTodoSaga(action) {
  try {
    const { id, text } = action.payload;

    const updatedTodo = yield call(fetchHelper, `${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    yield put(editTodo({ id: updatedTodo.id, text: updatedTodo.text }));
  } catch (e) {
    console.error(e);
  }
}

// Wathers
function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemsSaga);
}

function* watchAddTodo() {
  yield takeEvery(addTodo.type, addTodoSaga);
}

function* watchClearAllTods() {
  yield takeEvery(clearAll.type, clearTodosSaga);
}

function* watchToggleComplete() {
  yield takeEvery(toggleCompleteTodo.type, toggleCompleteTodoSaga);
}

function* watchEditTodo() {
  yield takeEvery(editTodoStart.type, editTodoSaga);
}

export default function* rootSaga() {
  yield all([watchFetchTodos(), watchDeleteTodo(), watchAddTodo(), watchClearAllTods(), watchToggleComplete(), watchEditTodo()]);
}
