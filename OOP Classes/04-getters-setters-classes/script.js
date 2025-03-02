class Person {
  constructor(firstName, lastName) {
    //this._somethinSomething-standardna konvenicija developera za privatno svojstvo
    // i da joj ne treba pristupati u tom obliku dalje u kodu
    this._firstName = firstName;
    this._lastName = lastName;
  }
  //   Pre nego sto se svojstvo iz zagrada funkcije vrati,
  //   getterima mozemo da je izmenimo pre nego sto upotrebimo dalje.
  //   prvobitna vrednost svojstva ostaje ali je menjamo za nastavak rada sa njom
  //   Omogucava da se cita kao obicna promenljiva
  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  }
  get lastName() {
    return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //  Setterimao mennjamo vrednost svojstva kompletno
  //  mozemo da ubacujemo kakvu god logiku nam treba,dobra je za validaciju
  set firstName(value) {
    if (value.length > 1) {
      this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      console.log("First name must have moe than one letter");
    }
  }
  set lastName(value) {
    if (value.length > 1) {
      this._lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      console.log("last name must have moe than one letter");
    }
  }
}
const person1 = new Person("clam", "fandango");
console.log(person1);
console.log(person1.firstName); //poziva se getter

person1.firstName = "aureliano"; //Seterima  se dodeljuje vrednost i pozivaju se bez ()
person1.lastName = "Buendia";
console.log(person1.fullName); //
// Setter se poziva kada dodeljujemo  vrednost
// Getter se poziva kada citamo vrednost
