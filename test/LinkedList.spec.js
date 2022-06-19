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

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
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

  xit('should insert a value', done => {
    newLinkedList.push(9);
    newLinkedList.insert(2, 7);
    expect(newLinkedList.tail.value).to.equal(7);
    done();
  });

  xit('should remove the value based on index', done => {
    newLinkedList.unshift(7);
    newLinkedList.unshift(6);
    expect(newLinkedList.remove(1).value).to.equal(7);
    done();
  });

  xit('should reverse the list', done => {
    newLinkedList.unshift(7);
    newLinkedList.unshift(6);
    expect(newLinkedList.reverse().head.value).to.equal(8);
    done();
  });
});
