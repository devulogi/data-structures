const { expect } = require('chai');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
}

// ------------------------------------------------------- //

let queue = null;

beforeEach(() => {
  queue = new Queue(8);
});

describe('Queue', () => {
  xit('should create a new queue instance', done => {
    expect(queue.last.value).to.equal(8);
    done();
  });

  xit('should add a new node to the end', done => {
    expect(queue.enqueue(9).last.value).to.equal(9);
    expect(queue.length).to.equal(2);
    done();
  });
});
