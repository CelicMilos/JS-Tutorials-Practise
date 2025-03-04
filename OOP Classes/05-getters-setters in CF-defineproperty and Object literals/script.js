// u Constructor funkcijama getteri i setteri se prave pomocu
//Object.defineProperty.U zagradi se ubacuje this.,ime getera/setera i
//  funkcija koja ih definise

function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });
  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });
  //   U getterima mozemo koristit druge vec napravljene gettere
  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
  });
}
Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
const person1 = new Person("clam", "fandango");
console.log(person1);
console.log(person1.firstName);
person1.firstName = "aurelio";
person1.lastName = "buendia";
console.log(person1.fullName);

//U Object literal,getteri i setteri se postavljaju kao i u klasama

const PersonObj = {
  _firstName: "aureliano",
  _lastName: "buendia",
  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  },
  set firstName(value) {
    this._firstName = value;
  },
  get lastName() {
    return this.capitalizeFirst(this._lastName);
  },
  set lastName(value) {
    this._lastName = value;
  },
  //Isto mogu vec gotovi getteri da se koriste
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  //   Ili metodi
  capitalizeFirst: (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
};
console.log(PersonObj);
console.log(PersonObj.fullName);
PersonObj.lastName = "Fandango";
console.log(PersonObj);
const person2 = Object.create(PersonObj);
person2.firstName = "clam";
person2.lastName = "fandango";
console.log(person2.fullName);
