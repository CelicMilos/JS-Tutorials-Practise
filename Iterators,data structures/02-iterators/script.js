const app = {
  nextIndex: 0,
  cyclists: ["MVDP", "Tadej Pogacar", "Matej Mohoric", "Van Aert"],
  next() {
    if (this.nextIndex >= this.cyclists.length) {
      return { done: true };
    }
    const returnValue = { value: this.cyclists[this.nextIndex], done: false };
    this.nextIndex++;
    return returnValue;
  },
};
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

// iterators are not iterable!

// for (const cyclists of app) {
//   console.log(cyclists);
// }

// Ali kad se koristi [Symbol.iterator],onda jeste.
const app2 = {
  cyclists: ["MVDP", "Tadej Pogacar", "Matej Mohoric", "Van Aert"],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.cyclists.length
          ? { value: this.cyclists[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};
const iterator = app2[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

for (const cyclists of app2) {
  console.log(cyclists);
}
