const palindrome = require("./palindrome");

describe("Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof palindrome("kayak")).toEqual("boolean");
  });
  it("should return true if is a palindrome", () => {
    expect(palindrome("kayak")).toEqual(true);
    expect(palindrome("wow")).toBeTruthy(); //moze i ovo za boolean .toBeTruthy() ili .toBeFalsy()
    expect(palindrome("rotor")).toBeTruthy();
    expect(palindrome("r o t a t o r")).toBeTruthy();
  });
  it("should return false if is not a palindrome", () => {
    expect(palindrome("Hello")).toEqual(false);
    expect(palindrome("world")).toBeFalsy();
    expect(palindrome("ball")).toBeFalsy();
  });
  it("should return false if it includes spaces", () => {
    expect(palindrome(" wow")).toEqual(false);
    expect(palindrome(" kayak")).toBeFalsy();
    expect(palindrome("pop ")).toBeFalsy();
  });
});
