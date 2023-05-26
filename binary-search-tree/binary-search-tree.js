class Node {
    constructor( data ) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);
        let target = this.root;
        let prev = target;
        while(target) {
            prev = target;
            if(target.data > data) {
                target = target.left;
            } else {
                target = target.right;
            }
        }
        if(!prev) this.root = node;
        else if(prev.data > data) prev.left = node;
        else prev.right = node;
    }

    bfs() {
        const data = [];
        const queue = [];
        if(!this.root) return data;
        queue.push(this.root);
        while(queue.length) {
            const node = queue.pop();
            data.push(node.data);
            if(node.left) queue.unshift(node.left);
            if(node.right) queue.unshift(node.right);
        }
        return data;
    }
    // using recursion
    dfsPreOrder(root) {
       if(!root) return;
       console.log(root.data);
       this.dfsPreOrder(root.left);
       this.dfsPreOrder(root.right);
    }
    // using stack
    dfsPreOrderUsingStack() {
        const stack = [];
        stack.push(this.root);
        while(stack.length) {
            const node = stack.pop();
            console.log(node.data);
            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }
     }
}

const BST = new BinarySearchTree();
BST.insert(12);
BST.insert(13);
BST.insert(10);
BST.insert(9);
BST.insert(14);
BST.insert(19);

console.log(BST.root);
console.log(BST.bfs());

// DFS PreOrder
BST.dfsPreOrder(BST.root);
BST.dfsPreOrderUsingStack();
