class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  toString(){
    return this.value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
        if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  postorder(node = this.root){
    if(!node) return
    this.postorder(node.left)
    this.postorder(node.right)
    console.log(node.value);
  }
}


let bst = new BinarySearchTree()
bst.insert(50)
bst.insert(60)
bst.insert(40)
bst.insert(55)
bst.insert(70)
bst.insert(30)

bst.postorder()
