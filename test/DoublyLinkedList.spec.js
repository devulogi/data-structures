const { expect } = require('chai');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

// ------------------------------------------------------- //

let newDoublyLinkedList = null;

beforeEach(() => {
  newDoublyLinkedList = new DoublyLinkedList(8);
});

describe('DoublyLinkedList', () => {
  xit('should create a new doubly linked list', done => {
    const newDLL = new DoublyLinkedList(7);
    expect(newDLL.head.value).to.equal(7);
    done();
  });
});
