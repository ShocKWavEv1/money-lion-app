import {
  formatLikes,
  handleDate,
  handleDynamicBackgroundColor,
  handleNameAvatar,
} from "./utils";

describe("formatLikes function", () => {
  it("should return likes for numbers less than 1000", () => {
    expect(formatLikes(500)).toEqual("500 likes");
    expect(formatLikes(999)).toEqual("999 likes");
  });

  it("should return likes in k format for numbers between 1000 and 999,999", () => {
    expect(formatLikes(1000)).toEqual("1.0k likes");
    expect(formatLikes(5000)).toEqual("5.0k likes");
    expect(formatLikes(999999)).toEqual("1000.0k likes");
  });

  it("should return likes in M format for numbers greater than or equal to 1000000", () => {
    expect(formatLikes(1000000)).toEqual("1.0M likes");
    expect(formatLikes(1500000)).toEqual("1.5M likes");
    expect(formatLikes(9999999)).toEqual("10.0M likes");
  });
});

describe("handleNameAvatar function", () => {
  it("should return the initials of first and last name capitalized", () => {
    expect(handleNameAvatar("john", "doe")).toEqual("JD");
    expect(handleNameAvatar("Alice", "Smith")).toEqual("AS");
  });

  it("should handle empty strings", () => {
    expect(handleNameAvatar("", "")).toEqual("");
    expect(handleNameAvatar("John", "")).toEqual("J");
    expect(handleNameAvatar("", "Doe")).toEqual("D");
  });

  it("should handle single character inputs", () => {
    expect(handleNameAvatar("J", "D")).toEqual("JD");
    expect(handleNameAvatar("A", "S")).toEqual("AS");
  });
});

describe("handleDynamicBackgroundColor function", () => {
  it("should return a valid RGB string", () => {
    const color = handleDynamicBackgroundColor();
    const rgbRegex = /^rgb\((\d+),(\d+),(\d+)\)$/;

    expect(typeof color).toBe("string");
    expect(rgbRegex.test(color)).toBe(true);

    const [, red, green, blue] = rgbRegex.exec(color) || [];
    expect(Number(red)).toBeGreaterThanOrEqual(0);
    expect(Number(red)).toBeLessThanOrEqual(255);
    expect(Number(green)).toBeGreaterThanOrEqual(0);
    expect(Number(green)).toBeLessThanOrEqual(255);
    expect(Number(blue)).toBeGreaterThanOrEqual(0);
    expect(Number(blue)).toBeLessThanOrEqual(255);
  });

  it("should return different colors on successive calls", () => {
    const color1 = handleDynamicBackgroundColor();
    const color2 = handleDynamicBackgroundColor();

    expect(color1).not.toEqual(color2);
  });
});

describe("handleDate function", () => {
  it("should format date in the expected format", () => {
    const date1 = "2024-05-15T12:00:00Z";
    expect(handleDate(date1)).toEqual("May 15, 2024");

    const date2 = "2024-12-01T12:00:00Z";
    expect(handleDate(date2)).toEqual("Dec 01, 2024");
  });

  it("should handle invalid date inputs", () => {
    const invalidDate = "Invalid Date";
    expect(handleDate(invalidDate)).toEqual("Invalid Date");

    expect(handleDate(null)).toEqual("Invalid Date");

    expect(handleDate(undefined)).toEqual("Invalid Date");

    expect(handleDate("")).toEqual("Invalid Date");
  });
});
