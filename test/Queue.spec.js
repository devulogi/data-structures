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
}

// ------------------------------------------------------- //

let queue = null;

beforeEach(() => {
  queue = new Queue(8);
});

describe('Queue', () => {
  it('should create a new queue instance', done => {
    expect(queue.last.value).to.equal(8);
    done();
  });
});
