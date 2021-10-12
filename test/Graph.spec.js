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

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
}

let graph = null;

beforeEach(() => {
  graph = new Graph();
});

describe('Graph', () => {
  xit('should create instance of Graph', done => {
    expect(graph).to.haveOwnProperty('adjacencyList');
    done();
  });

  xit('should create vertex in adjacencyList', done => {
    graph.addVertex('A');
    expect(graph.adjacencyList).to.haveOwnProperty('A');
    done();
  });

  xit('should insert vertices and connect them together', done => {
    graph.addVertex('1');
    graph.addVertex('2');
    expect(graph.addEdge('1', '2')).to.be.true;
    done();
  });
});
