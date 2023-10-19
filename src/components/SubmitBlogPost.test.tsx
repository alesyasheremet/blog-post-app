import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SubmitBlogPost from "./SubmitBlogPost";

describe("With React Testing Library", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  it("Shows Submit Form", () => {
    store = mockStore(initialState);
    const { getByPlaceholderText, getByText, getByRole } = render(
      <Provider store={store}>
        <SubmitBlogPost />
      </Provider>,
    );

    const nameInput = getByPlaceholderText("Geen titel");

    expect(nameInput).toBeInTheDocument();
    expect(getByRole("option", { name: "Geen" })).toBeInTheDocument();
  });
});
