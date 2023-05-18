class Node {
  constructor ( value ) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (value) {
       if(this.length === 0) {
        this.head = new Node(value);
        this.tail = this.head;
       } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
       }
       this.length++;
    }
}

// Init
const list = new LinkedList();
// Insert
list.push(23);
list.push(34);
list.push(45);
// Display
console.log(list);