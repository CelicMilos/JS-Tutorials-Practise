// Generatori su slicni iteratorima.Mogu da se koristi za pravljenje iteratora.
// Imaju mnog laksu sintaksu i laksi za odrazavanja
// To su funkcije koje mogu da se pauziraju i pomocu "yield" i to se izbacuje
// ne moramo rucno da pravimo next()
// Obelezavaju se sa function*,mnogo se vise koriste nego iteratori
function* createCyclistIterator(cyclists) {
  for (let i = 0; i < cyclists.length; i++) {
    yield cyclists[i];
  }
}

const cyclists = [
  "MVDP",
  "Tadej Pogacar",
  "Matej Mohoric",
  "Remco Evenepool",
  "van Aert",
];

const iterator = createCyclistIterator(cyclists);

console.log(iterator.next().value);
console.log(iterator.next());

// Mogu se ponavljati!
for (const cyclist of createCyclistIterator(cyclists)) {
  console.log(cyclist);
}

// spread operator
console.log([...createCyclistIterator(cyclists)]);

// destructuring
const [first, second, third, forth, fifth, sixth] =
  createCyclistIterator(cyclists);
console.log(first, second, third, forth, fifth, sixth);
