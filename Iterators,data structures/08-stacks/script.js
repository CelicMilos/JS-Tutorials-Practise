// Stack je LIFO (Last In, First Out) struktura podataka,
// što znači da se poslednji element koji je dodat prvi uklanja.
// Zamislimo ga kao gomilu tanjira – poslednji tanjir koji stavimo na vrh biće prvi koji ćemo uzeti.
// Stack u JavaScript-u

// Ne koriste se mnogo,bolji su array i maps,ali je dobro znati koko stvari funkcionisu
// na nizem nivou manipulacije nizova
// Dobar za intervjue

// JavaScript nema ugrađenu strukturu Stack, ali se može koristiti Array da simulira simulira
// njegovo ponašanje pomoću sledećih metoda:

// push()
// pop()
// peak()
// length()
// isEmpty()
// clear()

class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }
  push(item) {
    this._items[this._count] = item;
    this._count++;
    // moze i sa vec ugradjenim metodom this._items.push() ali je previse lako,ovo je jos
    //  nizi nivo manipulacije nizovima
  }
  pop() {
    if (this.isEmpty()) {
      console.log("No items to pop");
      return "Underflow"; //prazan skup
    }
    const item = this._items[this._count - 1]; //poslednji item i nizu koji treba da se izbacuje
    this._count--; //smanjujemo _count jer iz bacujemo poslednji item
    // svakom itemu se dodaje +1 na index i pomera i u levo
    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._items.length = this._count;
    return item;
    // moze i sa vec ugradjenim metodom .pop() ili .slice(),ali je previse lako,ovo je jos
    //  nizi nivo manipulacije nizovima
  }
  peek() {
    if (this.isEmpty()) {
      return "No items in Stack";
    }
    return this._items[this._count - 1];
  }
  isEmpty() {
    return this._count === 0;
  }
  length() {
    return this._count;
    //this._count je privatno svojstvo koje se ne poziva van klase pa zato moramo ovako
  }
  clear() {
    //Brisanje celog steka
    this._items = [];
    this._count = 0;
  }
}
const stack = new Stack();
stack.push("Item 1");
stack.push("Item 2");
stack.push("Item 3");
stack.push("Item 4");
stack.push("Item 5");
stack.push("Item 6");
stack.pop();

// stack.clear();

console.log(stack);
console.log("Top item is: ", stack.peek());
console.log("Stack length is: ", stack.length());
