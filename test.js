class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtEnd(value) {
    const newNode = new Node1(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  insertAtStart(value) {
    const newNode = new Node1(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
}

class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtStart(value) {
    const newNode = new Node2(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  insertAtEnd(value) {
    const newNode = new Node2(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
}

// B S T

class Node3 {
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
    let newNode = new Node3(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
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
      } else {
        console.log("element is already exists");
      }
    }
  }
}

// Binary Tree

class Node4 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node4(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }
}

// Tree

class Node5 {
  constructor(value) {
    this.value = value;
    this.childrens = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(parent_value, value) {
    const newNode = new Node5(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const parent = this.findParent(this.root, parent_value);
    if (!parent) {
      console.error(`couldn't find parent with value ${parent_value}`);
      return;
    }
    parent.childrens.push(newNode);
  }

  findParent(node, parent) {
    if (!node) return null;

    if (node.value == parent) {
      return node;
    }

    for (let child of node.childrens) {
      let result = this.findParent(child, parent);
      if (result) return result;
    }
    return null;
  }

  bfs() {
    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      queue.push(...current.childrens);
    }
  }

  dfs(node = this.root) {
    console.log(node.value);

    for (let child of node.childrens) {
      this.dfs(child);
    }
  }
}

const tree = new Tree();

/*
     A
   / | \
  B  C  D
 /  / \  \
H  F   G  I

*/
tree.insert(null, "A");
tree.insert("A", "B");
tree.insert("A", "C");
tree.insert("A", "D");

tree.insert("C", "F");

tree.insert("D", "I");

tree.insert("C", "G");

tree.insert("B", "H");

console.log("Bredth first search");
tree.bfs();

console.log("Depth first search");
tree.dfs();

// G r a p h

class Graph {
  constructor(size) {
    this.size = size;
    this.adjacencyMatrix = [];

    for (let i = 0; i < size; i++) {
      this.adjacencyMatrix[i] = [];
      for (let j = 0; j < size; j++) {
        this.adjacencyMatrix[i][j] = 0;
      }
    }
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        console.log(this.adjacencyMatrix[i][j]);
      }
      console.log("\n");
    }
  }
  addEdges(source, dest) {
    if (source >= 0 && source < this.size && dest >= 0 && dest < this.size) {
      this.adjacencyMatrix[source][dest] = 1
      // this.adjacencyMatrix[dest][source] = 1 // undirected graph
    }
  }
}

let graph = new Graph(3);
graph.addEdges(0, 2)
console.log("graph");
graph.print();
