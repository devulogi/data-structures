const { describe } = require('mocha');
const { expect } = require('chai');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let before = this.head;
    while (temp.next) {
      before = temp;
      temp = temp.next;
    }
    this.tail = before;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      return false;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    const temp = this.get(index);
    temp.value = value;
    return temp;
  }
}

// ------------------------------------------------------- //

let newLinkedList = null;

beforeEach(() => {
  newLinkedList = new LinkedList(8);
});

describe('LinkedList', () => {
  xit('should create a new list', done => {
    const newLL = new LinkedList(9);
    expect(newLL.head.value).to.equal(9);
    done();
  });

  xit('should push a new value', done => {
    newLinkedList.push(7);
    expect(newLinkedList.head.next.value).to.equal(7);
    done();
  });

  xit('should pop the tail', done => {
    newLinkedList.push(7);
    expect(newLinkedList.pop().value).to.equal(7);
    done();
  });

  xit('should add value at the beginning', done => {
    newLinkedList.unshift(7);
    expect(newLinkedList.head.value).to.equal(7);
    done();
  });

  xit('should remove value at the beginning', done => {
    newLinkedList.unshift(7);
    expect(newLinkedList.shift().value).to.equal(7);
    done();
  });

  xit('should get the value by index', done => {
    newLinkedList.push(7);
    expect(newLinkedList.get(1).value).to.equal(7);
    done();
  });

  xit('should update the value based on index', done => {
    expect(newLinkedList.set(0, 7).value).to.equal(7);
    done();
  });
});
