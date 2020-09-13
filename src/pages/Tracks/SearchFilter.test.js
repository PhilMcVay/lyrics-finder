import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchFilter from "./SearchFilter";

describe("<SearchFilter>", () => {
  it("Should Render", () => {
    const { container } = render(<SearchFilter />);

    expect(container).toBeInTheDocument();
  });

  it("Should display the value", () => {
    render(
      <SearchFilter placeholder="mock-placeholder-text" value="mock-value" />
    );

    expect(screen.getByPlaceholderText("mock-placeholder-text").value).toBe(
      "mock-value"
    );
  });

  it("Should display placeholder", () => {
    render(<SearchFilter placeholder="mock-placeholder-text" />);

    expect(
      screen.getByPlaceholderText("mock-placeholder-text")
    ).toBeInTheDocument();
  });

  it("Should call the onChange prop", () => {
    const onChangeProp = jest.fn();

    render(
      <SearchFilter
        placeholder="mock-placeholder-text"
        onChange={onChangeProp}
      />
    );

    userEvent.type(
      screen.getByPlaceholderText("mock-placeholder-text"),
      "1234"
    );

    expect(onChangeProp).toHaveBeenCalled();
  });
});
