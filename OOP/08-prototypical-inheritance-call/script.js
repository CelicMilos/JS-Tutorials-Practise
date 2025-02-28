// Nasledjivanje prototipova
function Shape(name) {
  this.name = name;
}
Shape.prototype.logName = function () {
  console.log(`Shape name: ${this.name}`);
};
// Pomocu .call pozivamo i ubrajamo jednu CF u drugu CF
function Rectangle(name, width, height) {
  Shape.call(this, name);
  this.width = width;
  this.height = height;
}
// Nasledjivanje prototipove pomocu Object.create()
// Malo komplikovano,mnogo je bolje sa klasama
Rectangle.prototype = Object.create(Shape.prototype);

function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle("HSH Rectangle, the Purifyer", 12, 14);
console.log(rect);

const cir1 = new Circle("Circle, the Great.First of hes line", 13);
console.log(cir1);
cir1.logName();
rect.logName();

// Polymophism - jedan metod(.logName) radi dve razlicite stvari
Rectangle.prototype.logName = function () {
  console.log(`Rectangle name: ${this.name}`);
};
rect.logName();
