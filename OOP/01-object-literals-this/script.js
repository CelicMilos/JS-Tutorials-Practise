const rectangle = {
  name: "Rectangle 1",
  width: 15,
  height: 10,
  area: function () {
    //moze i () =>
    //pomocu this. se pozivaju svojstva iz objekata i ono vazi samo unutar objekta
    return this.width * this.height;
  },
};
console.log("The area of " + rectangle.name + " is " + rectangle.area());

const rectangle2 = {
  name: "Rectangle 2",
  width: 14,
  height: 8,
  area: function () {
    return this.width * this.height;
  },
};
console.log("The area of " + rectangle2.name + " is " + rectangle.area());

// Za razliku od Constructora,Literali se mogu pozvati samo jedan put tj.
// svojstva i metodi vaze samo za taj objekat
// Constructori se mogu koristiti vise puta tj.
// vise instanci jednog metoda -Instantiation
