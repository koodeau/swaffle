/**
 * Represents a Node in a queue.
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
 * Represents a Queue data structure.
 * @template T - The type of values stored in the queue.
 * @implements {IQueue<T>}
 */
class Queue {
  /**
   * Constructs an empty Queue.
   */
  constructor() {
    this.front = null
    this.rear = null
    this.size = 0
  }

  /**
   * Adds a new value to the rear of the Queue.
   * @param {T} value - The value to be added.
   * @returns {Node<T>} - The newly added Node.
   */
  enqueue(value) {
    const node = new Node(value)

    if (!this.front) {
      this.front = node
      this.rear = node
    } else {
      if (this.rear) {
        this.rear.next = node
        this.rear = node
      }
    }
    this.size++
    return node
  }

  /**
   * Removes the front value from the Queue.
   */
  dequeue() {
    if (!this.front) return

    if (this.front == this.rear) {
      this.rear = null
    }
    this.front = this.front.next
    this.size--
  }

  /**
   * Retrieves the front value of the Queue without removing it.
   * @returns {T | null} - The front value or null if the Queue is empty.
   */
  peek() {
    if (!this.front) return null
    return this.front.value
  }

  /**
   * Checks if the Queue is empty.
   * @returns {boolean} - True if the Queue is empty, otherwise false.
   */
  isEmpty() {
    if (!this.front) return true
    return false
  }

  /**
   * Gets the size of the Queue.
   * @returns {number} - The size of the Queue.
   */
  getSize() {
    return this.size
  }
}

/**
 * Represents an interface for a Queue data structure.
 * @template T - The type of values stored in the queue.
 */
class IQueue {
  /**
   * Adds a new value to the rear of the Queue.
   * @param {T} value - The value to be added.
   * @returns {Node<T>} - The newly added Node.
   */
  enqueue(value) {}

  /**
   * Removes the front value from the Queue.
   */
  dequeue() {}

  /**
   * Retrieves the front value of the Queue without removing it.
   * @returns {T | null} - The front value or null if the Queue is empty.
   */
  peek() {}

  /**
   * Checks if the Queue is empty.
   * @returns {boolean} - True if the Queue is empty, otherwise false.
   */
  isEmpty() {}

  /**
   * Gets the size of the Queue.
   * @returns {number} - The size of the Queue.
   */
  getSize() {}
}

export { Queue, IQueue }
