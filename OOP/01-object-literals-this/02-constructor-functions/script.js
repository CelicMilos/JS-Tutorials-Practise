function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
const rectangle1 = new Rectangle("Rectangle 1", 14, 13);
console.log(rectangle1.area());

// Prilikom pozivanja reci 'new' dese sledece stvari:
// 1. novi prazan objekat se kreira
// 2. Nova construktor funkcija se poziva sa argumentima unetim u nju tj. unutar()
// 3.Stvara se nova this. rec za taj novi prazan objekat
// 4.Novi objekat se vraca od constr. funcije sa unetim argumentima

// Construktor funkcija moze da se poziva koliko god puta na treba

const rectangle2 = new Rectangle("Rectangle 2", 13, 15);
const rectangle3 = new Rectangle("Rectangle 3", 15, 15);

console.log(rectangle2.name, rectangle3.name);
console.log(rectangle2.area(), rectangle3.area());

// ugradjeni metodi
console.log(rectangle1.constructor); //dobijamo constr. funkciju kojom je obj. napravljen
console.log(rectangle2 instanceof Rectangle); //pitamo da li je rectangle2 instanca od constr. Rectanlge (vraca true ako jeste)
