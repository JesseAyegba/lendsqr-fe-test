import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionSubHeader from "@/components/shared/SectionSubHeader/SectionSubHeader";

describe("SectionSubHeader", () => {
  test("Ensures component renders the text correctly", async () => {
    const testProps = {
      text: "Users",
    };
    const { findByText } = render(<SectionSubHeader {...testProps} />);
    expect(await findByText("Users")).toBeInTheDocument();
  });
});
