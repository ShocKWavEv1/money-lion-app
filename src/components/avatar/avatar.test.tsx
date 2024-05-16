import { render } from "@testing-library/react";
import Avatar from "./avatar";

describe("Avatar component", () => {
  it("renders correctly with image", () => {
    const author = { first: "John", last: "Doe" };
    const image = "/path/to/image.jpg";
    const { container, getByAltText } = render(
      <Avatar width={100} height={100} image={image} author={author} />
    );

    expect(container.querySelector(".avatar_container")).toBeDefined();
    expect(getByAltText("")).toBeDefined();
  });

  it("renders correctly without image", () => {
    const author = { first: "John", last: "Doe" };
    const { container, getByText } = render(
      <Avatar width={100} height={100} author={author} />
    );

    expect(container.querySelector(".avatar_container")).toBeDefined();
    expect(getByText("JD")).toBeDefined();
  });
});
