//Constructor function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}
//Prototype
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
const rect = new Rectangle("Rect", 10, 10);
console.log(rect.area());
