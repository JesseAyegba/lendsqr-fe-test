import { fireEvent, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/forms/LoginForm/LoginForm";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("LoginForm", () => {
  test("Ensures form renders correctly", async () => {
    const { findByRole } = render(<LoginForm />);
    const formHeading = await findByRole("heading", { name: /welcome/i });

    expect(formHeading).toBeInTheDocument();
  });

  test("Ensures form validation works correctly", async () => {
    const { findByText } = render(<LoginForm />);
    const submitButton = await findByText("LOG IN");

    fireEvent.click(submitButton);

    expect(await findByText("Email is required")).toBeInTheDocument();
    expect(await findByText("Password is required")).toBeInTheDocument();
  });

  test("Ensures submit button is disabled when form is submitting", async () => {
    const { findByText, getByText, findByPlaceholderText } = render(
      <LoginForm />
    );
    const emailInput = await findByPlaceholderText("Email");
    const passwordInput = await findByPlaceholderText("Password");
    const submitButton = await findByText("LOG IN");

    fireEvent.change(emailInput, { target: { value: "testing@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "testing123" } });

    async () => {
      fireEvent.click(submitButton);

      expect(await findByText("LOG IN")).toBeDisabled();
      expect(await findByText("LOG IN")).toHaveStyle("cursor: not-allowed");
    };
  });
});
