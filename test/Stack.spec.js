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
}

let newStack = null;

beforeEach(() => {
  newStack = new Stack(8);
});

describe('Stack', () => {
  it('should create a new stack instance', done => {
    const nStack = new Stack(7);
    expect(nStack.top.value).to.equal(7);
    expect(nStack.length).to.equal(1);
    done();
  });
});
