class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({vertex: v2, weight});
        this.adjacencyList[v2].push({vertex: v1, weight});
    };
    dijkstra(start, end) {
        const distances = {};
        const queue = new PriorityQueue();
        const previous = {};
        let path = []
        let smallest;

        //building initial state
        for (let key in this.adjacencyList) {
            if (key === start) {
                distances[key] = 0;
                queue.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                queue.enqueue(key, Infinity);
            }
            previous[key] = null;
        };
        //updating states
        while (queue.values.length) {
            smallest = queue.dequeue().value;
            if (smallest === end) {
                //when done
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(smallest);
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                //finds neighbouring nodes
                for (let neighbour in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    //calculate new distance to neigbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.vertex;
                    if (candidate < distances[nextNeighbour]) {
                        //updating new smallest distance to neighbour from start
                        distances[nextNeighbour] = candidate;
                        //updating previous - path to neighbour
                        previous[nextNeighbour] = smallest;
                        //enqueue in priority queue with new priority
                        queue.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let currentIdx = Math.floor((index - 1)/2);
            let current = this.values[currentIdx];
            if (element.priority >= current.priority) break;
            this.values[currentIdx] = element;
            this.values[index] = current;
            index = currentIdx;
        }
    }
    dequeue() {
        const root = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return root;
    }
    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
                
                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild.priority < element.priority) {
                        swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if ((swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                        swap = rightChildIdx;
                    }
                }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);
graph.addEdge("D", "E", 3);
