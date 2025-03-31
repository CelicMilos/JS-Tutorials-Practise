const reverseString = require("./reversestring");

describe("Reverse String", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function"); //testiramo da li je reverseString funkcija
  });
  it("should return string", () => {
    expect(typeof reverseString("hello")).toEqual("string"); //pozivamo funkciju i testiramo da li vraca string
  });
  it("should return the reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh"); //pozivamo funkciju i testiramo da li vraca obrnutu string
    expect(reverseString("wow")).toEqual("wow");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
