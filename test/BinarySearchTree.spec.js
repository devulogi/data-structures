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

  insert(value) {
    // create a new node
    const newNode = new Node(value);
    // if root is null, assign new node to root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // track current node value
    let temp = this.root;
    while (true) {
      // return undefined, if current node and new node's value is the same
      if (temp.value === newNode.value) return undefined;
      // compare value's of current node and new node to decide which branch to go (L or R)
      if (temp.value > newNode.value) {
        // if current  node branch is "null", assign new node
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
}

// ------------------------------------------------------- //

let bst = null;

beforeEach(() => {
  bst = new BinarySearchTree();
});

describe('Binary Search Tree', () => {
  xit('should create instance of BST', done => {
    expect(bst).to.be.an.instanceOf(BinarySearchTree);
    expect(bst.root).to.be.null;
    done();
  });

  xit('should store new node root', done => {
    expect(bst.root).to.be.null;
    expect(bst.insert(2)).to.be.an.instanceOf(BinarySearchTree);
    expect(bst.root.value).to.equal(2);
    done();
  });
});
