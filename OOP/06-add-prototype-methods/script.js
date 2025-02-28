// constructor function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}
// Dodavanje prototipova
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimetar = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};
const rect = new Rectangle("Rect", 10, 10);

console.log(rect);
console.log(rect.area());
console.log(rect.perimetar());
console.log(rect.isSquare());
