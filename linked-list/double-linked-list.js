class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        if (this.length === 0) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            const node = new Node(value);
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
}

const dll = new DoubleLinkedList();
// Insert
dll.push(34);
console.log(dll)
dll.push(35);
console.log(dll)
dll.push(36);
console.log(dll.head.next.next.prev.prev)

