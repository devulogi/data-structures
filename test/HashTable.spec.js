const { expect } = require('chai');

class HashTable {
  constructor(size = 7) {
    this.table = new Array(size);
  }

  _hash(key, size) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey = key.charCodeAt(i);
    }
    return (this.table.length + hashedKey * size) % 163;
  }

  set({ key, size }) {
    const index = this._hash(key, size);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, size]);
    return this;
  }
}

// ------------------------------------------------------- //

let hash = null;

beforeEach(() => {
  hash = new HashTable();
  hash.set({ key: 'paint', size: 10 });
});

describe('HashTable', () => {
  xit('should create instance of hash table', done => {
    expect(Buffer.from(hash.table).length).to.equal(7);
    done();
  });

  it('should set new items in the hash table', done => {
    hash.set({ key: 'washers', size: 10 });
    hash.set({ key: 'brush', size: 100 });
    hash.set({ key: 'nails', size: 1000 });
    hash.set({ key: 'lumber', size: 1 });
    hash.set({ key: 'bolts', size: 15 });
    hash.set({ key: 'screw', size: 150 });
    expect(hash.table[5][0][1]).to.equal(100);
    done();
  });
});
