class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        let parent = this.root;
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            while (true) {
                if (value === parent.value) return;
                if (value < parent.value) {
                    if (parent.left === null) {
                        parent.left = newNode;
                        return this;
                    } else {
                        parent = parent.left;
                    }
                } else if (value > parent.value) {
                    if (parent.right === null) {
                        parent.right = newNode;
                        return this;
                    } else {
                        parent = parent.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        if (this.root === value) return true;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
    BFS() {
        let q = [];
        let store = [];
        let current = this.root;
        q.push(current);

        while (q.length) {
            current = q.shift();
            store.push(current.value);
            if (current.left) q.push(current.left); 
            if (current.right) q.push(current.right);
        }
        return store;
    }
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
        return data;
    }
    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(25)