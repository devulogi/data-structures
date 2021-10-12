const { expect } = require('chai');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}

describe('Graph', () => {
  it('should create instance of Graph', done => {
    const graph = new Graph();
    expect(graph).to.haveOwnProperty('adjacencyList');
    done();
  });
});
