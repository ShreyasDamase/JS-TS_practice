class Node {
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

  isEmpty() {
    return this.root === null;
  }

  //BFS
  BFSTraversal() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  //minvalue
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  //   maxValue
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  //Add node
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (newNode.value > root.value) {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  }
  //find node
  find(root, value) {
    if (!root) {
      return false;
    }
    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.find(root.left, value);
    } else if (value > root.value) {
      return this.find(root.right, value);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  display(node = this.root, space = 0, indent = 5) {
    if (node === null) return;

    space += indent;

    this.display(node.right, space);
    console.log(" ".repeat(space) + node.value);
    this.display(node.left, space);
  }
}
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(99);

tree.display();
// console.log("BSD ");
// tree.BFSTraversal();

// console.log(tree.minValue(tree.root));
// console.log(tree.maxValue(tree.root));

tree.delete(5);
tree.display();
