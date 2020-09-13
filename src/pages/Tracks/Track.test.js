import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Track from "./Track";

describe("<TrackList>", () => {
  it("Should Render", () => {
    render(
      <BrowserRouter>
        <Track track="mock-track" />
      </BrowserRouter>
    );

    expect(screen.getByText("mock-track")).toBeInTheDocument();
  });
});
