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

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.tail;
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
    this.length++;
    return this;
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

  it('should add a new value to the end of the list', done => {
    expect(newDoublyLinkedList.push(9).tail.value).to.equal(9);
    done();
  });
});
