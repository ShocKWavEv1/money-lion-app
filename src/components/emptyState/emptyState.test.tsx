import { render } from "@testing-library/react";
import EmptyState from "./emptyState";

describe("EmptyState component", () => {
  it("renders title and description correctly", () => {
    const title = "No Results Found";
    const description = "There are no results to display.";

    const { getByText } = render(
      <EmptyState title={title} description={description} />
    );

    expect(getByText(title)).toBeDefined();
    expect(getByText(description)).toBeDefined();
  });
});
