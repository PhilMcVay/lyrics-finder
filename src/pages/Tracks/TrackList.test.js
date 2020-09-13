import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TrackList from "./TrackList";

describe("<TrackList>", () => {
  it("Should Render", () => {
    const { container } = render(<TrackList />);

    expect(container).toBeInTheDocument();
  });

  it("Should show a list of tracks", () => {
    render(
      <BrowserRouter>
        <TrackList trackList={["a-track", "b-track", "c-track"]} />
      </BrowserRouter>
    );

    expect(screen.getByText("a-track")).toBeInTheDocument();
    expect(screen.getByText("b-track")).toBeInTheDocument();
    expect(screen.getByText("c-track")).toBeInTheDocument();
  });

  it("Should not display the filter search if no tracks are provided", () => {
    render(
      <BrowserRouter>
        <TrackList trackList={[]} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("tracks-list")).toMatchSnapshot();
  });

  it("Should filter the track list based on the search filter", () => {
    render(
      <BrowserRouter>
        <TrackList trackList={["a-track", "b-track", "c-track"]} />
      </BrowserRouter>
    );

    expect(screen.getByText("a-track")).toBeInTheDocument();
    expect(screen.getByText("b-track")).toBeInTheDocument();
    expect(screen.getByText("c-track")).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText("Filter Tracks..."), "b");

    expect(screen.queryByText("a-track")).not.toBeInTheDocument();
    expect(screen.getByText("b-track")).toBeInTheDocument();
    expect(screen.queryByText("c-track")).not.toBeInTheDocument();
  });
});
