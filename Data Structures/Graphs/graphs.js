class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertex(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            let edge = this.adjacencyList[vertex][i];
            this.removeEdge(vertex, edge);
        }
        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("London");
g.addVertex("Paris");
g.addVertex("New York");
