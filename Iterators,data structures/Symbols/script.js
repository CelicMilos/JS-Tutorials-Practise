const sym = Symbol();
const sym1 = Symbol("hey");
const sym2 = Symbol("foo");

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym.description);
console.log(sym1.description);

// Symbols are unique

console.log(Symbol("sym") === Symbol("sym"));

const user = {
  [Symbol("id")]: 1,
  name: "Clam Fandango",
  email: "clamF@gmail.com",
};
user.id = 2;
console.log(user);
console.log(user[Symbol("id")]);

// And NOT enumerable

console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}
// getOwnPropertysymbols

console.log(Object.getOwnPropertySymbols(user));

// Symbol.for()

const sym3 = Symbol.for("foo");
const sym4 = Symbol.for("foo");
console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym));

console.log(sym3.toString());
console.log(sym3.valueOf());

// Built in symbols
console.log(Object.getOwnPropertyNames(Symbol));
