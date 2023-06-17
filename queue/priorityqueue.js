class MaxPriorityQueue {
    constructor() {
        this.queue = [];
        this.length = 0;
    }

    enqueue(node) {
        this.queue.push(node);
        this.length++;
        let i = this.length - 1;
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.queue[parentIndex][1] < node[1]) {
                this.queue[i] = this.queue[parentIndex];
                this.queue[parentIndex] = node;
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    dequeue(){
        if(!this.length) {
            return undefined;
        }
        const popped = this.queue[0];
        this.queue[0] = this.queue[this.length - 1];
        this.queue[this.length - 1] = popped;
        this.length--;
        let i  = 1;
        while( i < this.length) {
          let left = i * 2;
          let right = i * 2 + 1;
          let swapIndex;
          const element = this.queue[i-1];
          if(left <= this.length) {
            if( element[1] < this.queue[left-1][1]) {
              swapIndex = left;
            }
          }
          if(right <= this.length) {
            if((swapIndex != null && this.queue[left - 1][1] < this.queue[right-1][1])|| 
                (swapIndex == null && element[1] < this.queue[right-1][1])) {
              swapIndex = right;
            }
          }
          if(swapIndex == null) return popped;
          this.queue[i-1] = this.queue[swapIndex - 1];
          this.queue[swapIndex -1] = element;
          i = swapIndex;
        }
        return popped;
    }
}


const queue = new MaxPriorityQueue();
queue.enqueue(['a', 53]);
queue.enqueue(['b', 56]);
queue.enqueue(['f', 50]);
queue.enqueue(['e', 52]);
queue.enqueue(['h', 57]);


console.log(queue.queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

