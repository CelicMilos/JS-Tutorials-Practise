// Map su jos jedna struktura podata,slicna objektiva, imaju key-value parove podataka
// ali key nemora da bude string,moza biti bilo sta
// podaci se uvacuju sa .set()
const myMap = new Map();
myMap.set(1, "Clam Fandango");
myMap.set("mail", "clam@gmail.com");
myMap.set("color", "Blue");
console.log(myMap);
console.log(myMap.get(1));
console.log(myMap.get("mail"));
console.log(myMap.get("color"));

console.log(myMap.size);

console.log(myMap.has("mail"));
console.log(myMap.has("location"));

myMap.delete("color");
console.log(myMap);

const peopleMap = new Map();
peopleMap.set("Clam Fandango", {
  phone: "555-555-5555",
  email: "clam@gmail.com",
});
peopleMap.set("Aureliano Buendia", {
  phone: "666-555-6666",
  email: "buendia@gmail.com",
});
peopleMap.set("Rebeca", {
  phone: "555-555-5555",
  email: "rebeca@gmail.com",
});

peopleMap.forEach((person) => console.log(person.email));
console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

// Mape su i iteratori pa mozemo da korsitimo i .next() metod

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
