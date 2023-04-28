import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Status from "@/components/page-wrappers/UsersPageWrapper/Status/Status";

describe("Status", () => {
  test("Ensures component renders correctly", async () => {
    const testProps = {
      status: "Active",
      userId: "123",
    };
    const { findByRole } = render(<Status {...testProps} />);

    expect(await findByRole("button")).toBeInTheDocument();
  });

  test("Ensures dropdown is shown when button is clicked", async () => {
    const testProps = {
      status: "Active",
      userId: "123",
    };
    const { findByRole, findByTestId } = render(<Status {...testProps} />);
    const button = await findByRole("button");

    fireEvent.click(button);

    expect(await findByTestId("status-dropdown")).toBeVisible();
  });
});
