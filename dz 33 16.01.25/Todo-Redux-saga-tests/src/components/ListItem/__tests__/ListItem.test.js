import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListItem from "../ListItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("ListItem Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todo: {
        todos: [{ id: 1, text: "Test Task", completed: false }],
        loading: false,
      },
    });

    store.dispatch = jest.fn(); 
  });

  test("renders a task item", () => {
    render(
      <Provider store={store}>
        <ListItem text="Test Task" completed={false} />
      </Provider>
    );
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("checkbox dispatches toggle action", () => {
    render(
      <Provider store={store}>
        <ListItem id={1} text="Test Task" completed={false} />
      </Provider>
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "todo/toggleCompleteTodo",
      payload: { id: 1, completed: true },
    });
  });
});