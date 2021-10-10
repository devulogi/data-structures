const { expect } = require('chai');
const assert = require('assert');

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
    this.tail = newNode;
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

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      newNode.next = temp;
      temp.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
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

  xit('should add a new value to the end of the list', done => {
    expect(newDoublyLinkedList.push(9).tail.value).to.equal(9);
    done();
  });

  xit('should pop the last value of the list', done => {
    newDoublyLinkedList.push(9);
    expect(newDoublyLinkedList.pop().tail.value).to.equal(8);
    expect(newDoublyLinkedList.length).to.equal(1);
    done();
  });

  xit('should add a new value at the beginning', done => {
    expect(newDoublyLinkedList.unshift(7).head.value).to.equal(7);
    expect(newDoublyLinkedList.length).to.equal(2);
    done();
  });

  xit('should remove the value at the beginning', done => {
    newDoublyLinkedList.shift();
    expect(newDoublyLinkedList.head).to.be.null;
    expect(newDoublyLinkedList.tail).to.be.null;
    expect(newDoublyLinkedList.length).to.be.equal(0);
    done();
  });
});
