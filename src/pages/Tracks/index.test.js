import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, waitForElement } from "@testing-library/react";
import axiosMock from "axios";

import TracksPage from "./index";

const mockArtistData = {
  data: {
    artists: [{ id: "1234", name: "artist-name" }],
  },
};

const mockWorksData = {
  data: {
    works: [
      { title: "C Song", type: "Song" },
      { title: "Video 1", type: "Video" },
      { title: "B Song", type: "Song" },
      { title: "A Song", type: "Song" },
    ],
  },
};

describe("<TracksPage>", () => {
  it("Should Render", () => {
    render(<TracksPage />);

    expect(screen.getByTestId("tracks-page")).toBeInTheDocument();
  });

  it("Should fetch the list of tracks for an artist and display them in alphabetical order", async () => {
    axiosMock.get
      .mockResolvedValueOnce(mockArtistData)
      .mockResolvedValueOnce(mockWorksData);

    render(
      <BrowserRouter>
        <TracksPage />
      </BrowserRouter>
    );

    // Display loading state while fetching data
    expect(screen.getByText("Loading Tracks...")).toBeInTheDocument();

    const trackList = await waitForElement(() => screen.getByText("A Song"));

    // Display all songs
    expect(screen.getByText("A Song")).toBeInTheDocument();
    expect(screen.getByText("B Song")).toBeInTheDocument();
    expect(screen.getByText("C Song")).toBeInTheDocument();

    // Display list in alphabetical order
    expect(trackList).toMatchSnapshot();
  });
});
