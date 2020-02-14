import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test (`checks last name`, () => {
  const { getByName } = render(<App/>)

  const lastName = getByName(/last/i)
  expect(last).toBeInTheDocumet();
})