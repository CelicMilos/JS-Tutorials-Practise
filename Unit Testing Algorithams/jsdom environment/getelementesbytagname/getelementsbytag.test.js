// Za ovu funkciju moramo da instaliramo dev paket 'jest-environment-jsom'
//i napravimo fajl jest.confic.js root folderu,podesimo testEnvironment na 'jsdom' i exportujemo

const getElementsByTag = require("./getelementsbyteg");
describe("Get elements by tag", () => {
  //prva 3 testa su standardna,funkcija,array i da li je array prazna
  it("should be a function", () => {
    expect(typeof getElementsByTag).toEqual("function");
  });
  it("should return an array", () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });
  it("should return an empty arry if no root is passed in", () => {
    expect(getElementsByTag()).toEqual([]);
  });
  //testiramo jsdom okruzenja ,krairanjem laznih(mock) elemenata
  // jer nemamo pravi frontend tj. document
  it("should return only root element if no tagName is passed in", () => {
    const root = document.createElement("div");
    expect(getElementsByTag(root)).toEqual([root]);
  });
  it("should return  correct element", () => {
    const root = document.createElement("div");
    //add child elements
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const span = document.createElement("span");
    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);
    const result = getElementsByTag(root, "p");
    expect(result).toEqual([p1, p2]);
  });
});
