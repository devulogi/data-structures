const { expect } = require('chai');

class Node {
  constructor(value) {
    this.value = value;
    this.top = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

// ------------------------------------------------------- //

let newStack = null;

beforeEach(() => {
  newStack = new Stack(8);
});

describe('Stack', () => {
  xit('should create a new stack instance', done => {
    const nStack = new Stack(7);
    expect(nStack.top.value).to.equal(7);
    expect(nStack.length).to.equal(1);
    done();
  });

  xit('should put value on top of the stack', done => {
    expect(newStack.push(9).top.value).to.equal(9);
    expect(newStack.length).to.equal(2);
    done();
  });

  xit('should remove value on top of the stack', done => {
    expect(newStack.pop().value).to.equal(8);
    expect(newStack.length).to.equal(0);
    done();
  });
});
