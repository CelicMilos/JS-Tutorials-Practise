const hasDuplicalteIds = require("./hasduplicateids");

describe("DOM tree Has Duplicate IDs", () => {
  // Da ne bi ponavljali kod i smanjili ga koristimo kuke(hooks)
  //pre i posle svakog test before beforeEach() i afterEach()
  let root;
  beforeEach(() => {
    //Create mock elements
    console.log("Before each ran...");
    root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");
    root.appendChild(child1);
    root.appendChild(child2);
  });
  afterEach(() => {
    console.log("After each ren...");
    root = null;
  });
  it("sholud be a function", () => {
    expect(typeof hasDuplicalteIds).toEqual("function");
  });
  it("sholud return false if no root", () => {
    expect(hasDuplicalteIds()).toBeFalsy;
  });
  it("sholud return true if there are duplicate IDs", () => {
    // Add duplivate IDs
    root.id = "root";
    root.children[0].id = "child";
    root.children[1].id = "child";
    const result = hasDuplicalteIds(root);

    expect(result).toBeTruthy;
  });
  it("sholud return false if there are no duplicate IDs", () => {
    // Add  IDs
    root.id = "root";
    root.children[0].id = "child1";
    root.children[1].id = "child2";
    const result = hasDuplicalteIds(root);

    expect(result).toBeFalsy;
  });
});
