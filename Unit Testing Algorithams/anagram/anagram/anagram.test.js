const anagram = require("./anagram");

describe("Anagram strings", () => {
  it("should be function", () => {
    expect(typeof anagram).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof anagram("ram", "arm")).toEqual("boolean");
  });
  it("should return true if anagram", () => {
    expect(anagram("iceman", "cinema")).toBeTruthy();
    expect(anagram("god", "dog")).toBeTruthy();
    expect(anagram("ram", "arm")).toBeTruthy();
  });
  it("should return false if not anagram", () => {
    expect(anagram("hello", "watsup")).toBeFalsy();
    expect(anagram("iceman", "icemachine")).toBeFalsy();
    expect(anagram("robodog", "normaldog")).toBeFalsy();
  });
});
