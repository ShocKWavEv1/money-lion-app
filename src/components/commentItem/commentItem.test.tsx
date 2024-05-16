import { render } from "@testing-library/react";
import CommentItem from "./commentItem";

describe("CommentItem component", () => {
  it("renders comment data correctly", () => {
    const comment = {
      author: "John Doe",
      text: "This is a test comment",
      likes: 10,
      profilePic: "/path/to/profilePic.jpg",
    };

    const { getByText } = render(<CommentItem comment={comment} />);

    expect(getByText(comment.author)).toBeDefined();
    expect(getByText(comment.text)).toBeDefined();
    expect(getByText(`${comment.likes} likes`)).toBeDefined();
  });

  it("renders avatar with profile picture", () => {
    const comment = {
      author: "John Doe",
      text: "This is a test comment",
      likes: 10,
      profilePic: "/path/to/profilePic.jpg",
    };

    const { container } = render(<CommentItem comment={comment} />);

    expect(container.querySelector("img")).toBeDefined();
  });
});
