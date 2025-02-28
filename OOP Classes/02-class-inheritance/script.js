// parent class
class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log("Shape name is: " + this.name);
  }
}
// Sub class or child class
// Kad god se jedna klasa prenosi(extends) na drugu,radimo to
// pomocu super() i u zagrade stavljamo ono sto zelimo da prenesemo na tu drugu klasu
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}
const rect = new Rectangle("Rectangle,the Conqueror.", 13, 15);
console.log(rect);
rect.logName();
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
//
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  //   Polymorphism-isto ime metoda,dve razlicite funkcije
  logName() {
    console.log("Circle name is: " + this.name);
  }
}
const cir = new Circle("Circle LionHeart", 14);
console.log(cir);
cir.logName();
console.log(cir instanceof Circle);
console.log(cir instanceof Shape);
