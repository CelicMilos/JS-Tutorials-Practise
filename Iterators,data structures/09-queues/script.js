// Queue (red) je struktura podataka koja radi po principu FIFO (First In, First Out),
//  što znači da se prvi dodat element prvi uklanja – kao red čekanja u prodavnici.

class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }
  //   Dodavanje elemenata u red
  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }
  //   Brisanje elemenata,slicno  kao .pop() kod steka samo sto se brise prvi elemena u redu.
  dequeue() {
    if (this.isEmpty()) {
      console.log("The Queue is empty");
      return undefined;
    }
    const item = this._items[this._front];

    for (let i = this._front; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._count--;
    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this._items[this._front];
  }
  isEmpty() {
    return this._count === 0;
  }
  length() {
    return this._count - this._front;
  }
  clear() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }
}

const q = new Queue();
q.enqueue("Item 1");
q.enqueue("Item 2");
q.enqueue("Item 3");
q.enqueue("Item 4");
q.enqueue("Item 5");
q.enqueue("Item 6");
q.dequeue();
q.dequeue();

// q.clear();

console.log("Front item is: ", q.peek());
console.log("Queue length is: ", q.length());
console.log(q);
