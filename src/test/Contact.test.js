import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../pages/Contact";

test("renders contact form and handles form submission", () => {
  render(<Contact />);

  // Check if form elements are rendered
  const nameInput = screen.getByLabelText(/Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/Message/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Fill out the form
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
  fireEvent.change(messageInput, {
    target: { value: "Hello, this is a test message." },
  });

  // Submit the form
  fireEvent.click(submitButton);

  // Check if the form submission message is displayed
  const submissionMessage = screen.getByText(/Form submitted successfully/i);
  expect(submissionMessage).toBeInTheDocument();

  // Check if the total submissions count is displayed
  const totalSubmissions = screen.getByText(/Total submissions:/i);
  expect(totalSubmissions).toBeInTheDocument();
});
