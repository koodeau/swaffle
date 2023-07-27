/**
 * Represents a Node in a binary search tree.
 * @template T - The type of value stored in the Node.
 */
class Node {
  /**
   * @param {T} value - The value to be stored in the Node.
   */
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/**
 * Represents a Binary Search Tree.
 * @template T - The type of values stored in the tree.
 * @implements {IBinarySearchTree<T>}
 */
class BinarySearchTree {
  /**
   * Constructs an empty Binary Search Tree.
   */
  constructor() {
    this.root = null
  }

  /**
   * Inserts a new value into the Binary Search Tree.
   * @param {T} value - The value to be inserted.
   * @returns {Node<T> | null} - The newly inserted Node or null if the value already exists.
   */
  insert(value) {
    const newNode = new Node(value)
    if (this.root == null) {
      this.root = newNode
      return newNode
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return null
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode
            return newNode
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right == null) {
            current.right = newNode
            return newNode
          } else {
            current = current.right
          }
        }
      }
    }
  }

  /**
   * Checks if a value is present in the Binary Search Tree.
   * @param {T} value - The value to be checked.
   * @returns {boolean} - True if the value is present, otherwise false.
   */
  isPresent(value) {
    if (this.root === null) return false
    let current = this.root
    let nodeFound = false

    while (current && !nodeFound) {
      if (value < current.value) {
        if (current) {
          if (current.left != null) {
            current = current.left
          }
        }
      } else if (value > current.value) {
        if (current.right != null) {
          current = current.right
        }
      } else {
        nodeFound = true
      }
    }
    return nodeFound ? nodeFound : false
  }
}

/**
 * Represents an interface for a Binary Search Tree.
 * @template T - The type of values stored in the tree.
 */
class IBinarySearchTree {
  /**
   * Inserts a new value into the Binary Search Tree.
   * @param {T} value - The value to be inserted.
   * @returns {Node<T> | null} - The newly inserted Node or null if the value already exists.
   */
  insert(value) {}

  /**
   * Checks if a value is present in the Binary Search Tree.
   * @param {T} value - The value to be checked.
   * @returns {boolean} - True if the value is present, otherwise false.
   */
  isPresent(value) {}
}

export { BinarySearchTree, IBinarySearchTree }
