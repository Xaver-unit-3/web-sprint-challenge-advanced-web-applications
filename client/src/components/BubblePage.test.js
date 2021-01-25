import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  render(<BubblePage />);

  const getColorsList = require('./BubblePage');

  jest.mock('./BubblePage');
  async () => {
    axios.get({
      data: [
        {
          color: "aliceblue",
          code: {
            hex: "#f0f8ff",
          },
          id: 1,
        },
        {
          color: "limegreen",
          code: {
            hex: "#99ddbc",
          },
          id: 2,
        },
        {
          color: "aqua",
          code: {
            hex: "#00ffff",
          },
          id: 3,
        },
      ],
    });

    const colorList = await getColorsList();
    expect(colorList).toHaveLength(3);
  };
});

