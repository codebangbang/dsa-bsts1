class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const insertNode = (node, val) => {
      if (node === null) {
        return new Node(val);
      }
      if (val < node.val) {
        node.left = insertNode(node.left, val);
      } else {
        node.right = insertNode(node.right, val);
      }
      return node;
    };

    this.root = insertNode(this.root, val);
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    }

    if (val < node.val) {
      if (node.left === null) {
        node.left = new Node(val);
        return;
      } else {
        this.insertRecursively(val, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(val);
        return;
      } else {
        this.insertRecursively(val, node.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    const findNode = (node, val) => {
      if (node === null) {
        return null;
      }
      if (val === node.val) {
        return node;
      }
      if (val < node.val) {
        return findNode(node.left, val);
      } else {
        return findNode(node.right, val);
      }
    };
    return findNode(this.root, val);
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, Node = this.root) {
    if (Node === null) {
      return null;
    }
    if (val === Node.val) {
      return Node;
    }
    if (val < Node.val) {
      return this.findRecursively(val, Node.left);
    } else {
      return this.findRecursively(val, Node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    const traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [this.root];
    if (this.root !== null) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const node = queue.shift();
      visited.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

export default BinarySearchTree;

/** bfs(): Traverse the array using BFS.
 * Return an array of visited nodes. */
