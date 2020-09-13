import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("<Card>", () => {
  it("Should Render", () => {
    const { container } = render(<Card />);

    expect(container).toBeInTheDocument();
  });

  it("Should render child elements", () => {
    render(
      <Card>
        <div>Child Element</div>
      </Card>
    );

    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
