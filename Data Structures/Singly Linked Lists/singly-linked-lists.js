class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop () {
        if (!this.head) return;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift () {
        if (!this.head) return;
        let oldHead = this.head;
        this.head = this.oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    unshift (val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
            this.length = 1;
        } else {
            newHead.next = this.head;
            this.head = newHead;
            this.length += 1;
        }
        return this;
    }
    get (index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    set (index, value) {
        let oldValue = this.get(index);
        if (oldValue) {
            oldValue.val = value;
            return true;
        }
        return false;
    }
    insert (index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        else {
            let newNode = new Node(value);
            let prevIndex = this.get(index - 1);
            let temp = prevIndex.next;
            prevIndex.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
    }
    remove (index) {
        if (index < 0 || index > this.length) return;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }
    reverse () {
        this.head = this.tail;
        let next;
        let prev;
        let node = this.head;
        while ()
    }
}

var list = new SinglyLinkedList();
