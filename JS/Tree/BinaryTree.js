/**
 * this tree only consist of insert node and serch  node and Delete node
 *
 *
 */

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
console.log(tree.find(tree.root, 2));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   isEmpty() {
//     return this.root === null;
//   }
//   //Add node
//   insert(value) {
//     const newNode = new Node(value);

//     if (isEmpty()) {
//       this.root = newNode;
//       return;
//     }
//     let current = this.root;
//     while (true) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return;
//         }
//         current = current.left;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           current.right = newNode;
//           return;
//         }
//         current = current.right;
//       }
//     }
//   }
//   //find node
//   find(value) {
//     if (this.root === null) {
//       return false;
//     }
//     let current = this.root;
//     while (true) {
//       if (value === current.value) {
//         return true;
//       } else if (value < current.value) {
//         if (current.left === null) {
//           return false;
//         }
//         current = current.left;
//       } else if (value > current.value) {
//         if (current.right === null) {
//           return false;
//         }
//         current = current.right;
//       }
//     }
//   }

//   display(node = this.root, space = 0, indent = 5) {
//     if (node === null) return;

//     space += indent;

//     this.display(node.right, space);
//     console.log(" ".repeat(space) + node.value);
//     this.display(node.left, space);
//   }
// }
// const tree = new BinaryTree();
// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// tree.insert(2);
// tree.insert(4);
// tree.insert(6);
// tree.insert(8);
// tree.insert(10);
// tree.insert(15);
// tree.insert(9);

// tree.display();
// console.log(tree.find(19));
