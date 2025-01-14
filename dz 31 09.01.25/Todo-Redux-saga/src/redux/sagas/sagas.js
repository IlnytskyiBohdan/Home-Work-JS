import { all, takeEvery, call, put, select } from "redux-saga/effects";
import API from "../constants/constants";
import { setTodos, fetchStart, deleteTodo, deleteItem, addTodo, addItem, clearAll } from "../slice/todoSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Httpp error");
    }
    return response.json();
  });
}

// Workers
// .map((todo) => ({ ...todo, completed: todo.completed || false }))
function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API);

    yield put(setTodos(todos));
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

    yield put(deleteItem());
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

export default function* rootSaga() {
  yield all([watchFetchTodos(), watchDeleteTodo(), watchAddTodo(), watchClearAllTods()]);
}
