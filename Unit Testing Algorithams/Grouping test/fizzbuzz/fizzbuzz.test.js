// Sa describe() mozemo da testirammo vise stvari i da dobijamo preciznije testove

const fizzBuzz = require("./fizzbuzz");
describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function"); //testima/ocekujemo da li je fizzBuzz funkcija
  });
  it("should return number if not devisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toEqual(1); //ocekujemo da vrati broj ako nije deljiv sa 3 ili 5
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(17)).toEqual(17);
  });
  it("should return Fizz if is devisible by 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz"); //ocekujemo da vrati Fizz ako je deljiv sa 3
    expect(fizzBuzz(6)).toEqual("Fizz");
    expect(fizzBuzz(12)).toEqual("Fizz");
  });
  it("should return Buzz if is devisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz"); //ocekujemo da vrati Buzz ako je deljiv sa 5
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(20)).toEqual("Buzz");
  });
  it("should return FizzBuzz if is devisible by3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz"); //ocekujemo da vrati FizzBuzz ako je deljiv sa 5
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
  });
});
