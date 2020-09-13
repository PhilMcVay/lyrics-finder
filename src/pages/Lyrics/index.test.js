import React from "react";
import renderWithRouter from "../../utils/renderWithRouter";
import { screen, waitForElement } from "@testing-library/react";
import axiosMock from "axios";

import LyricsPage from "./index";

const mockLyrics = {
  data: {
    lyrics: "line 1\nline 2\nline 3\nline 4\n\nline 5\nline 6\nline 7\nline 8",
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockReturnValue({ artistName: "The Police", track: "track-name" }),
}));

describe("<LyricsPage>", () => {
  it("Should fetch the song lyrics for the artist and track from the url", async () => {
    axiosMock.get.mockResolvedValueOnce(mockLyrics);

    renderWithRouter(<LyricsPage />);

    // Display loading state while fetching data
    expect(screen.getByText("Loading Lyrics...")).toBeInTheDocument();

    const lyrics = await waitForElement(() => screen.getByTestId("lyrics"));

    // Loading state is removed
    expect(screen.queryByText("Loading Lyrics...")).not.toBeInTheDocument();

    // Displays formatted Lyrics
    expect(lyrics).toMatchSnapshot();
  });

  it("Should render the artist and track name from the url", () => {
    renderWithRouter(<LyricsPage />);

    expect(screen.getByText("The Police - track-name")).toBeInTheDocument();
  });
});
