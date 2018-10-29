class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            removed.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return removed;
    }
    shift() {
        if (!this.head) return;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return;
        let midpoint = Math.floor(this.length / 2);
        if (index <= midpoint) {
            let count = 0;
            let getNode = this.head;
            while (count !== index) {
                getNode = getNode.next;
                count++;
            }
            return getNode;
        } else {
            let count = this.length - 1;
            let getNode = this.tail;
            while (count !== index) {
                getNode = getNode.prev;
                count--;
            }
            return getNode;
        }
    }
    set(index, value) {
        let changedNode = this.get(index);
        if (changedNode != null) {
            changedNode.val = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        newNode.next = nextNode;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) this.shift();
        if (index === this.length - 1) this.pop();

        let removed = this.get(index);
        let prevNode = removed.prev;
        let nextNode = removed.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);