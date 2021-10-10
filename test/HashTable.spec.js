const { expect } = require('chai');

class HashTable {
  constructor(size = 7) {
    this.table = new Array(size);
  }

  _hash({ key, size }) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey = key.charCodeAt(i);
    }
    return (size + hashedKey * 23) % this.table.length;
  }
}

describe('HashTable', () => {
  xit('should create instance of hash table', done => {
    const hash = new HashTable();
    expect(Buffer.from(hash.table).length).to.equal(7);
    done();
  });
});
