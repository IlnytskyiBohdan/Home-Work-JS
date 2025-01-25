import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Footer from "../Footer";

const mockStore = configureStore([]);

describe("Footer Component", () => {
  test("renders correct total task count", () => {
    const store = mockStore({
      todo: {
        todos: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    });

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    expect(screen.getByText("Total tasks: 3")).toBeInTheDocument();
  });
});
