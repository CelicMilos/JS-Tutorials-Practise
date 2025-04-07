// kad uvozi samo jedna stvar
// import capitalizedWords from "./modules/utils.js";

// kad se uvozi vise stvari onda kao destrukturiranje opjekat
import { capitalizedWords, moneySign } from "./modules/utils.js";
import Person from "./modules/Person.js";
console.log(capitalizedWords("hello world"));
console.log(moneySign(1000));

const person1 = new Person("clam fandango", 32);
person1.greet();
