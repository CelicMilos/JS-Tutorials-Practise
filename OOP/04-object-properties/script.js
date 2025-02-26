function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
const rect1 = new Rectangle("Rect 1", 24, 25);
const rect2 = new Rectangle("Rect 2", 13, 32);
const rect3 = new Rectangle("Rect 3", 4, 23);

// console.log(rect1["width"]);

// Adding properties

rect1.color = "red";
rect2.color = "blue";
rect3.color = "green";
// console.log(rect3);
document.body.style.backgroundColor = rect1.color;

// Adding Methods
rect1.perimetar = () => {
  return 2 * (rect1.width + rect1.height);
};
console.log(rect1.perimetar());

// remove propertie
console.log(rect3);
delete rect3.color;
console.log(rect3);

// Check for propertie

console.log(rect2.hasOwnProperty("color"));
console.log(rect3.hasOwnProperty("color"));

//  keys and values
console.log(Object.keys(rect2));
console.log(Object.keys(rect1));

console.log(Object.values(rect2));

// Entries

console.log(Object.entries(rect3));
for (let [key, value] of Object.entries(rect1)) {
  console.log(`${key}: ${value}`);
}
// samo svojstva ili samo funkcije
for (let [key, value] of Object.entries(rect3)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
