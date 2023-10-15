// Home.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders the correct content", () => {
  render(<Home />);
  const headerTextElement = screen.getByText(/Hi, I am/i);
  const semesterTextElement = screen.getByText(
    /I am 5th semester informatics student/i
  );

  expect(headerTextElement).toBeInTheDocument();
  expect(semesterTextElement).toBeInTheDocument();
});

test('renders the name "Jossy Raya Gopasda Saragih"', () => {
  render(<Home />);
  const nameElement = screen.getByText(/Jossy Raya Gopasda Saragih/i);
  expect(nameElement).toBeInTheDocument();
});
