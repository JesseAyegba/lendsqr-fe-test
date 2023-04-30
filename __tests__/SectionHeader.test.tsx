import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

describe("SectionHeader", () => {
  test("Ensures component renders the text correctly", async () => {
    const testProps = {
      text: "Users",
    };
    const { findByText } = render(<SectionHeader {...testProps} />);
    expect(await findByText("Users")).toBeInTheDocument();
  });
});
