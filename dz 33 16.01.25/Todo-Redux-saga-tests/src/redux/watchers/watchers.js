import { takeEvery } from "redux-saga/effects";
import {
  fetchItemsSaga,
  deleteItemsSaga,
  addTodoSaga,
  clearTodosSaga,
  toggleCompleteTodoSaga,
  editTodoSaga,
} from "../workers/workers";

import { fetchStart, deleteTodo, addTodo, clearAll, toggleCompleteTodo, editTodoStart } from "../slice/todoSlice";

export function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

export function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemsSaga);
}

export function* watchAddTodo() {
  yield takeEvery(addTodo.type, addTodoSaga);
}

export function* watchClearAllTods() {
  yield takeEvery(clearAll.type, clearTodosSaga);
}

export function* watchToggleComplete() {
  yield takeEvery(toggleCompleteTodo.type, toggleCompleteTodoSaga);
}

export function* watchEditTodo() {
  yield takeEvery(editTodoStart.type, editTodoSaga);
}
