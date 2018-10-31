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
}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(25)