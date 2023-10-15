import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";

jest.mock("../components/MainContent", () => () => (
  <div data-testid="mock-main-content">
    {/* You can customize the mocked content if needed */}
    Mocked MainContent Component
  </div>
));

test("renders About page with MainContent component", () => {
  render(<About />);
  const mainContentElement = screen.getByTestId("mock-main-content");

  expect(mainContentElement).toBeInTheDocument();
});
