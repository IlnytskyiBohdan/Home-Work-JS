import { all } from "redux-saga/effects";
import {
  watchFetchTodos,
  watchDeleteTodo,
  watchAddTodo,
  watchClearAllTods,
  watchToggleComplete,
  watchEditTodo,
} from "../watchers/watchers";

export default function* rootSaga() {
  yield all([watchFetchTodos(), watchDeleteTodo(), watchAddTodo(), watchClearAllTods(), watchToggleComplete(), watchEditTodo()]);
}
