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

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    }
    return true;
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

  it('should remove edge of vertices', done => {
    graph.addVertex('1');
    graph.addVertex('2');
    graph.addEdge('1', '2');
    graph.removeEdge('1', '2');
    expect(graph.adjacencyList['1'] && graph.adjacencyList['2']).to.be.empty;
    done();
  });
});
