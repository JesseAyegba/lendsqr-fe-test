import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/forms/LoginForm/LoginForm";

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
});
