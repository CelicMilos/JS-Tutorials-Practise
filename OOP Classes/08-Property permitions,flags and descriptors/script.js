// Permitions and flags

// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

// Primer za nepromenljivu tj.zakljucanu

console.log(Math.PI);
Math.PI = 4;
console.log(Math.PI);
// Sa Object.getOwnPropertyDescriptor dobijamo info o svojstvu
let desciptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(desciptor);

const rectObj = {
  name: "Rectangle LionHeart",
  width: 13,
  height: 14,
};
desciptor = Object.getOwnPropertyDescriptor(rectObj, "name");
console.log(desciptor);
// Sa Object.defineProperty menjamo ovlascenja(permitions) ya svojstva tj.
// sta mozemo sa njima da radimo(menjamo,modifikujemo,brisemo...)
Object.defineProperty(rectObj, "name", {
  configurable: false, //ako se ovde stavi 'false', ne moze se vise menjati ni sa novim Object.deifnePropery
  enumerable: false,
  writable: false,
});
desciptor = Object.getOwnPropertyDescriptor(rectObj, "name");
rectObj.name = "rectangle 1";
delete rectObj.name;
delete rectObj.width;
console.log(rectObj);
console.log(desciptor);

for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key}:${value}`);
}
// Sa Object.getOwnPropertyDescriptors(mnozina!) dobijamo info za sva svosjtva
console.log(Object.getOwnPropertyDescriptors(rectObj));
