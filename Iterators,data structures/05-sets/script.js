// Setovi su struktura podataka,relativno nove u JS,koje nam daju mogucnost da cuvamo
// kolekcije jedinstvenih vrednosti i nedozvoljavaju duplikate
// dobri si za npr. baze sa korisnicima i clanstvima ali nas ne zanimaju poredak vrednosti

const set = new Set([1, 2, 3, 4]);

// nema duplikata
const setWithDuplicats = new Set([1, 1, 2, 3, 4, 4, 5, 5]);
console.log(setWithDuplicats);

// dodavanje
set.add(5);

// provera postojanja podataka u setu- set.has().Varaca true/false

console.log(set.has(2));
console.log(set.has(23));

// brisanje
set.delete(3);
console.log(set);
console.log(set.has(3));

// mogu da se konvertuju u array

const setArrey = Array.from(set);
setArrey.pop();
console.log(setArrey);

// mogu da se iteriraju
for (let item of set) {
  console.log(item);
}
// a moze da se od njih prave Iteratori pomoci set.values i next()

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Brisanje celog seta

set.clear();
console.log(set);
