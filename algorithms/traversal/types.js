/**
 * Represents a node in a binary tree.
 * @template T - The type of value stored in the node.
 */
export class Node {
  /**
   * Creates a new node with the given value.
   * @param {T} value - The value to be stored in the node.
   */
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
