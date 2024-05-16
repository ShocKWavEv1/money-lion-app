import { render } from "@testing-library/react";
import ModalPost from "./modalPost";

describe("ModalPost component", () => {
  const currentPost = {
    title: "Test Title",
    subTitle: "Test Subtitle",
    body: "Test Body",
    imageUri: "/path/to/image.jpg",
    comments: [
      {
        author: "John Doe",
        text: "Comment 1",
        profilePic: "/path/to/image.jpg",
        likes: 20,
      },
      {
        author: "Jane Smith",
        text: "Comment 2",
        profilePic: "/path/to/image.jpg",
        likes: 20,
      },
    ],
  };

  it("renders post data correctly", () => {
    const setModal = jest.fn();
    const { getByText, getByAltText } = render(
      <ModalPost currentPost={currentPost} setModal={setModal} />
    );

    expect(getByText("Test Title")).toBeDefined();
    expect(getByText("Test Subtitle")).toBeDefined();
  });

  it("renders comments correctly", () => {
    const setModal = jest.fn();
    const { getByText } = render(
      <ModalPost currentPost={currentPost} setModal={setModal} />
    );

    expect(getByText("John Doe")).toBeDefined();
    expect(getByText("Comment 1")).toBeDefined();
    expect(getByText("Jane Smith")).toBeDefined();
    expect(getByText("Comment 2")).toBeDefined();
  });

  it("calls setModal when backdrop or sticky navigation is clicked", () => {
    const setModal = jest.fn();
    const { getByTestId } = render(
      <ModalPost currentPost={currentPost} setModal={setModal} />
    );

    getByTestId("backdrop").click();
    expect(setModal).toHaveBeenCalledTimes(1);
  });

  it("calls setModal when cta in sticky navigation is clicked", () => {
    const setModal = jest.fn();
    const { getByTestId } = render(
      <ModalPost currentPost={currentPost} setModal={setModal} />
    );

    getByTestId("close-modal").click();
    expect(setModal).toHaveBeenCalledTimes(1);
  });
});
