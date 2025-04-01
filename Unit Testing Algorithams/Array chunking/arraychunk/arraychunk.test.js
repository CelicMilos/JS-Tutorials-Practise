//ASSERTION LIBRARY- To je biblioteka koja omogućava da napišeš tvrdnje (assertions)
//  koje proveravaju da li tvoj kod radi kako treba.
// Ako tvrdnja nije tačna, test pada i generiše se greška.
//Sve ovo moze i sa expect()
const assert = require("assert");
const chunk = require("./arraychunk");

describe("Array Chunking", () => {
  it("should create chunks of a specific size", () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    //assert.deepEqual(funkcija i njeni argumenti,ono sto bi trebalo da dobijemo tom funkcijom)
  });
});
