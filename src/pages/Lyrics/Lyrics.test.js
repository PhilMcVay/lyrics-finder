import React from "react";
import { render, screen } from "@testing-library/react";

import Lyrics from "./Lyrics";

const mockLyrics =
  "line 1\nline 2\nline 3\nline 4\n\nline 5\nline 6\nline 7\nline 8";

describe("<Lyrics>", () => {
  it("Should Render", () => {
    const { container } = render(<Lyrics lyrics={mockLyrics} />);

    expect(container).toBeInTheDocument();
  });

  it("Should format the lyrics correctly", () => {
    render(<Lyrics lyrics={mockLyrics} />);

    expect(screen.getByTestId("lyrics")).toMatchSnapshot();
  });
});
