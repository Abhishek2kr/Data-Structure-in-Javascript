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
}

const BST = new BinarySearchTree();
BST.insert(12);
BST.insert(13);
BST.insert(10);
BST.insert(9);
BST.insert(14);
BST.insert(19);

console.log(BST.root);
