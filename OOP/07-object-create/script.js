// Jedan nacin da se prave prototipivi bez CF
// Kreaira se obican objekat sa fukcijama od kojih zelimo da napraimo prototipove
const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

// U obicnu funkciju dodaju se prototipovi i svojstva pomocu Object.create()
function createRactangle(width, height) {
  return Object.create(rectanglePrototypes, {
    width: { value: width },
    height: { value: height },
  });
}
const rect = createRactangle(12, 13);
console.log(rect);
console.log(rect.perimeter());
console.log(rect.area());
console.log(rect.isSquare());

// Sa tom funkcijom mogu da se prve koliko hocemo objekata
const rect2 = createRactangle(14, 18);
console.log(rect2);
console.log(rect2.perimeter());

// I mogu da se ubacuju  nova svojstva i funkcije ukoliko nam trebaju
const rect3 = createRactangle(12, 15);
rect3.name = "HRS:Rectangle the III";
rect3.mesage = function () {
  if (rect3.isSquare() === false) {
    console.log(rect3.name + " is not a sqare.Aw...");
  }
};
console.log(rect3);
console.log("The area of " + rect3.name + " is " + rect3.area());
rect3.mesage();
