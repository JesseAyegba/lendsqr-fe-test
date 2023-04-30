import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "@/components/page-wrappers/UsersPageWrapper/UsersTable/Filter/Filter";

describe("Filter", () => {
  test("Ensures component renders correctly", async () => {
    const testProps = {
      startItem: 1,
      endItem: 10,
      totalItems: 100,
    };
    const { findByText } = render(<Filter {...testProps} />);

    expect(await findByText("1 to 10")).toBeInTheDocument();
  });
});
