// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack_a = new Stack();
    this.stack_b = new Stack();
  }

  add(record) {
    this.stack_a.push(record);
  }

  remove() {
    while(this.stack_a.peek()) {
      this.stack_b.push(this.stack_a.pop());
    }
    const removed = this.stack_b.pop();
    while(this.stack_b.peek()) {
      this.stack_a.push(this.stack_b.pop());
    }
    return removed
  }

  peek() {
    while(this.stack_a.peek()) {
      this.stack_b.push(this.stack_a.pop());
    }
    const record =  this.stack_b.peek();
    while(this.stack_b.peek()) {
      this.stack_a.push(this.stack_b.pop());
    }
    return record;
  }
}

module.exports = Queue;
