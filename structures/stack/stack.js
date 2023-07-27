/**
 * Represents a Node in a stack.
 * @template T - The type of value stored in the Node.
 */
class Node {
  /**
   * @param {T} value - The value to be stored in the Node.
   */
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/**
 * Represents a Stack data structure.
 * @template T - The type of values stored in the stack.
 * @implements {IStack<T>}
 */
class Stack {
  /**
   * Constructs an empty Stack.
   */
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /**
   * Pushes a new value onto the Stack.
   * @param {T} value - The value to be pushed.
   * @returns {Node<T>} - The newly pushed Node.
   */
  push(value) {
    let newNode = new Node(value)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let currentNode = this.first
      newNode.next = currentNode
      this.first = newNode
    }
    this.size++
    return newNode
  }

  /**
   * Removes the top value from the Stack.
   */
  pop() {
    if (!this.first) return
    let temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
  }

  /**
   * Retrieves the top value of the Stack without removing it.
   * @returns {T | null} - The top value or null if the Stack is empty.
   */
  top() {
    if (!this.first) return null
    return this.first.value
  }

  /**
   * Checks if the Stack is empty.
   * @returns {boolean} - True if the Stack is empty, otherwise false.
   */
  isEmpty() {
    if (!this.first) return true
    return false
  }

  /**
   * Gets the size of the Stack.
   * @returns {number} - The size of the Stack.
   */
  getSize() {
    return this.size
  }
}

/**
 * Represents an interface for a Stack data structure.
 * @template T - The type of values stored in the stack.
 */
class IStack {
  /**
   * Pushes a new value onto the Stack.
   * @param {T} value - The value to be pushed.
   * @returns {Node<T>} - The newly pushed Node.
   */
  push(value) {}

  /**
   * Removes the top value from the Stack.
   */
  pop() {}

  /**
   * Retrieves the top value of the Stack without removing it.
   * @returns {T | null} - The top value or null if the Stack is empty.
   */
  top() {}

  /**
   * Checks if the Stack is empty.
   * @returns {boolean} - True if the Stack is empty, otherwise false.
   */
  isEmpty() {}

  /**
   * Gets the size of the Stack.
   * @returns {number} - The size of the Stack.
   */
  getSize() {}
}

export { Stack, IStack }
