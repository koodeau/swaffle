/**
 * Represents a Node in a linked list.
 * @template T - The type of value stored in the Node.
 */
class Node {
    /**
     * @param {T} value - The value to be stored in the Node.
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Represents a linked list data structure.
 * @template T - The type of values stored in the linked list.
 * @implements {ILinkedList<T>}
 */
export class LinkedList {
    /**
     * Constructs an empty linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adds a new value to the end of the linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            if (this.tail) {
                this.tail.next = node;
            }
            this.tail = node;
        }
        this.length++;
        return node;
    }

    /**
     * Removes the value from the end of the linked list.
     */
    pop() {
        if (!this.head) return;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
    }

    /**
     * Removes the value from the front of the linked list.
     */
    shift() {
        if (!this.head) return;
        const current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
    }

    /**
     * Adds a new value to the front of the linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    unshift(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return node;
    }

    /**
     * Retrieves the node at the given index in the linked list.
     * @param {number} index - The index of the node to retrieve.
     * @returns {Node<T> | null} - The node at the given index or null if the index is out of range.
     */
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            if (current) {
                current = current.next;
            }
            counter++;
        }
        return current;
    }

    /**
     * Sets the value of the node at the given index in the linked list.
     * @param {number} index - The index of the node to set the value for.
     * @param {T} value - The new value to be set.
     * @returns {Node<T> | null} - The node at the given index after the value has been set, or null if the index is out of range.
     */
    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
        }
        return node;
    }

    /**
     * Inserts a new value at the given index in the linked list.
     * @param {number} index - The index at which to insert the new value.
     * @param {T} value - The value to be inserted.
     * @returns {Node<T> | null} - The newly inserted Node or null if the index is out of range.
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return null;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);

        let prevNode = this.get(index - 1);
        let node = new Node(value);
        if (node && prevNode) {
            node.next = prevNode.next;
            prevNode.next = node;
            this.length++;
        }
        return node;
    }

    /**
     * Removes the node at the given index from the linked list.
     * @param {number} index - The index of the node to remove.
     */
    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let currentNode = this.get(index);
        if (prevNode && currentNode) {
            prevNode.next = currentNode.next;
            this.length--;
        }
    }

    /**
     * Reverses the linked list.
     */
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            if (node) {
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
        }
    }

    /**
     * Traverses the linked list and logs each value to the console.
     */
    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

/**
 * Represents an interface for a linked list data structure.
 * @template T - The type of values stored in the linked list.
 */
class ILinkedList {
    /**
     * Adds a new value to the end of the linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    push(value) { }

    /**
     * Removes the value from the end of the linked list.
     */
    pop() { }

    /**
     * Removes the value from the front of the linked list.
     */
    shift() { }

    /**
     * Adds a new value to the front of the linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    unshift(value) { }

    /**
     * Retrieves the node at the given index in the linked list.
     * @param {number} index - The index of the node to retrieve.
     * @returns {Node<T> | null} - The node at the given index or null if the index is out of range.
     */

    get(index) { }

    /**
     * Sets the value of the node at the given index in the linked list.
     * @param {number} index - The index of the node to set the value for.
     * @param {T} value - The new value to be set.
     * @returns {Node<T> | null} - The node at the given index after the value has been set, or null if the index is out of range.
     */
    set(index, value) { }

    /**
     * Inserts a new value at the given index in the linked list.
     * @param {number} index - The index at which to insert the new value.
     * @param {T} value - The value to be inserted.
     * @returns {Node<T> | null} - The newly inserted Node or null if the index is out of range.
     */
    insert(index, value) { }

    /**
     * Removes the node at the given index from the linked list.
     * @param {number} index - The index of the node to remove.
     */
    remove(index) { }

    /**
     * Reverses the linked list.
     */
    reverse() { }

    /**
     * Traverses the linked list.
     */
    traverse() { }

}
