// (Linked List) je linearna struktura podataka gde su elementi (čvorovi)
//  povezani preko referenci (pokazivača). Za razliku od niza, elementi nisu smešteni
//  u kontinualnim memorijskim lokacijama, već svaki čvor pokazuje na sledeći.
//  Tipovi povezanih list:
//  Jednostruko povezana lista (Singly Linked List)
//     Svaki čvor sadrži vrednost (data) i pokazivač na sledeći čvor (next).
//     Kretanje kroz listu je samo u jednom smeru.
// Dvostruko povezana lista (Doubly Linked List)
//     Svaki čvor sadrži pokazivač na prethodni čvor (prev) i sledeći čvor (next).
//     Omogućava kretanje unapred i unazad.
// Kružno povezana lista (Circular Linked List)
//     Poslednji čvor pokazuje nazad na prvi, formirajući krug.
// Gde se koriste:
// ✅ Menadžment memorije – bolje upravljanje prostorom od nizova.
// ✅ Undo/Redo funkcionalnost – kao u tekstualnim editorima.
// ✅ Navigacija u browseru – back/forward sistem koristi dvostruko povezane liste.

//Example of Hardcoded linked list
// const node1 = {
//   value: 100,
// };
// const node2 = {
//   value: 200,
// };
// const node3 = {
//   value: 300,
// };

// node1.next = node2;
// node2.next = node3;
// node3.next = null;
// console.log(node1, node2, node3);

class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }
  //   insert first node (Head)

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Insert last node (Tail)
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this._length++;
  }
  // Insert at index
  insertAt(value, index) {
    if (index > this._length) {
      return;
    }
    if (index === 0) {
      this.insertFirst(value);
      return;
    }
    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
    this._length++;
  }

  // Get at index
  getAt(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current._value);
        return current._value;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > this._length) {
      return;
    }
    let current = this._head;
    let previous;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._length--;
  }

  // Print list data
  printListData() {
    let current = this._head;
    let list = "";
    while (current) {
      list += current._value + " ";
      current = current.next;
    }
    console.log(list);
  }

  // Clear list
  clearList() {
    this._head = null;
    this._length = 0;
  }
}

const list = new LinkedList();
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertFirst(400);
list.insertLast(50);
list.insertLast(30);
console.log(list);
list.insertAt(250, 2);
list.insertAt(350, 1);
list.getAt(3);
list.getAt(6);
list.removeAt(3);

// list.clearList();

list.printListData();
