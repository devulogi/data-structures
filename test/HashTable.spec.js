const { expect } = require('chai');

class HashTable {
  constructor(size = 7) {
    this.table = new Array(size);
  }

  _hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey = key.charCodeAt(i);
    }
    return (hashedKey * 163) % this.table.length;
  }

  set({ key, size }) {
    const index = this._hash(key, size);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, size]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const allKeys = [];
    this.table.forEach(index => {
      index.forEach(item => allKeys.push(item[0]));
    });
    return allKeys;
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

  xit('should set new items in the hash table', done => {
    hash.set({ key: 'washers', size: 10 });
    hash.set({ key: 'brush', size: 100 });
    hash.set({ key: 'nails', size: 1000 });
    hash.set({ key: 'lumber', size: 1 });
    hash.set({ key: 'bolts', size: 15 });
    hash.set({ key: 'screw', size: 150 });
    expect(hash.table[0][0][0]).to.equal('lumber');
    done();
  });

  xit('should get item based of the key provided', done => {
    hash.set({ key: 'washers', size: 10 });
    hash.set({ key: 'brush', size: 100 });
    hash.set({ key: 'nails', size: 1000 });
    hash.set({ key: 'lumber', size: 1 });
    hash.set({ key: 'bolts', size: 15 });
    hash.set({ key: 'screw', size: 150 });
    hash.set({ key: 'pinot', size: 11 });
    expect(hash.get('paint')).to.equal(10);
    done();
  });

  xit('should get all keys in hash table', done => {
    expect(hash.keys().length).to.equal(1);
    done();
  });
});
