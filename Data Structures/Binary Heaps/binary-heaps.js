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
