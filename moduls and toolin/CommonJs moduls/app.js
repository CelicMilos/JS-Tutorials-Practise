const message = require("./utils.js");
const Person = require("./Person");
console.log(message);

const { capitalizedWords, moneySign } = require("./utils.js");
console.log(capitalizedWords("show me the money"));
console.log(moneySign(1223));
const person1 = new Person("Clam");
person1.greet();
