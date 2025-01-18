import API from "../constants/constants";
import { fetchHelper } from "../helpers/helpers";
import { call, put, select } from "redux-saga/effects";
import { setTodos, deleteItem, addItem, clearAllTodo, toggleComplete, editTodo } from "../slice/todoSlice";

export function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API);

    yield put(setTodos(todos.map((todo) => ({ ...todo, completed: todo.completed || false }))));
  } catch (e) {
    console.error(e);
  }
}

export function* deleteItemsSaga(action) {
  try {
    const todo = yield call(fetchHelper, `${API}/${action.payload}`, {
      method: "DELETE",
    });

    yield put(deleteItem(todo.id));
  } catch (e) {
    console.error(e);
  }
}

export function* addTodoSaga(action) {
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

export function* clearTodosSaga() {
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

export function* toggleCompleteTodoSaga(action) {
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

export function* editTodoSaga(action) {
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
