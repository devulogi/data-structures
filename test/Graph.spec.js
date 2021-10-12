const { expect } = require('chai');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
}

describe('Graph', () => {
  xit('should create instance of Graph', done => {
    const graph = new Graph();
    expect(graph).to.haveOwnProperty('adjacencyList');
    done();
  });

  xit('should create vertex in adjacencyList', done => {
    const graph = new Graph();
    graph.addVertex('A');
    expect(graph.adjacencyList).to.haveOwnProperty('A');
    done();
  });
});
