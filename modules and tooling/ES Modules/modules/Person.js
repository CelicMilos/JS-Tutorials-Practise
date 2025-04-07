class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  capitalizedWords(name) {
    return this.name
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(" ");
  }

  greet() {
    console.log("Hello, my name is ", this.capitalizedWords(this.name));
  }
}
export default Person;
