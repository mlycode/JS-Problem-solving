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
    DFTRecursive(vertex) {
        let results = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;
        traverse(vertex);
        function traverse(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            results.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) return traverse(neighbour);
            });
        };
        return results;
    }
    DFTIterative(vertex) {
        let results = [];
        let visited = {};
        let stack = [vertex];
        let currentVertex;

        visited[vertex] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            });
        }
        return results;
    }
    BFT(vertex) {
        let queue = [vertex];
        let visited = {};
        let results = [];
        let currentVertex;

        visited[vertex] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        };
        return results;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")