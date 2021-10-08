const { expect } = require('chai');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// ------------------------------------------------------- //

let bst = null;

beforeEach(() => {
  bst = new BinarySearchTree();
});

describe('Binary Search Tree', () => {
  xit('should create instance of BST', done => {
    expect(bst.root).to.equal(null);
    done();
  });
});
