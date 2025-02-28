// Klase-parametri i prototipovi
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimetar() {
    return 2 * (this.width + this.height);
  }
  isSquare() {
    return this.width === this.height;
  }
  // Abstraction-koristimo interne metode,za koje korisnik ne mora da zna

  logArea() {
    console.log("Rectangle are is: " + this.area());
  }
}
const rect = new Rectangle("Rectangle,the Defiler", 12, 14);
console.log(rect);
console.log(Object.getPrototypeOf(rect));

// Mozemo da dodajemo svoje metode i parametre
const rect2 = new Rectangle("Rectangle,the Impaler", 12, 12);
rect2.ifIsSquare = function () {
  if (rect2.isSquare() === true) {
    console.log(rect2.name + " is a square!BUAAHAHA`");
  }
};
// console.log(rect2);
console.log(rect2.isSquare());
rect2.ifIsSquare();
