import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "../TodoList";

const mockStore = configureStore([]);

describe("TodoList Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todo: { todos: [{ id: 1, text: "Existing Task", completed: false }] },
    });

    store.dispatch = jest.fn();
  });

  test("renders input field and Add button", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByLabelText("Add a task")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("can add a new task", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const input = screen.getByLabelText("Add a task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: "todo/addTodo" }));
    expect(input.value).toBe("");
  });

  test("can clear all tasks", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const clearButton = screen.getByText("Clear");
    fireEvent.click(clearButton);

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: "todo/clearAll" }));
  });
});
