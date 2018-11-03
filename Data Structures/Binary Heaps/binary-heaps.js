class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown () {
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
                    if (leftChild > element) {
                        swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if ((swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)) {
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

let heap = new MaxBinaryHeap();
heap.insert(95);
heap.insert(72);
heap.insert(65);
heap.insert(13);
heap.insert(45);
heap.insert(4);
heap.insert(55);
heap.insert(78);
heap.insert(35);
heap.insert(23);

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

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(1,0);
priorityQueue.enqueue(100,122);
priorityQueue.enqueue(3,23);
priorityQueue.enqueue(43,30);
priorityQueue.enqueue(22,46);
priorityQueue.enqueue(54,64);
priorityQueue.enqueue(12,28);
priorityQueue.enqueue(133,10);
priorityQueue.enqueue(18,12);