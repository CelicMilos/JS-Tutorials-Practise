// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed
const rectObj = {
  name: "Rectangle,The Conqueror",
  width: 10,
  height: 10,
};
Object.seal(rectObj);
rectObj.color = "red";
rectObj.width = 20;
let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);

const circleObj = {
  name: "Circle,The Great",
  radius: 14,
};
Object.freeze(circleObj);
descriptors = Object.getOwnPropertyDescriptors(circleObj);
circleObj.color = "blue";
delete circleObj.radius;
circleObj.name = "New name";
console.log(descriptors);
