/**
 * Represents a Node in a doubly linked list.
 * @template T - The type of value stored in the Node.
 */
class Node {
    /**
     * @param {T} value - The value to be stored in the Node.
     */
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * Represents a doubly linked list data structure.
 * @template T - The type of values stored in the doubly linked list.
 * @implements {IDoublyLinkedList<T>}
 */
export class DoublyLinkedList {
    /**
     * Constructs an empty doubly linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adds a new value to the end of the doubly linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            if (this.tail) {
                this.tail.next = node;
            }
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    /**
     * Removes the value from the end of the doubly linked list.
     */
    pop() {
        if (!this.head) return;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            if (currentTail) {
                this.tail = currentTail.prev;
                if (this.tail) {
                    this.tail.next = null;
                    currentTail.prev = null;
                }
            }
        }
        this.length--;
    }

    /**
     * Removes the value from the front of the doubly linked list.
     */
    shift() {
        if (!this.head) return;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = oldHead.next;
            if (newHead) {
                newHead.prev = null;
                oldHead.next = null;
                this.head = newHead;
            }
        }
        this.length--;
    }

    /**
     * Adds a new value to the front of the doubly linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            node.next = oldHead;
            oldHead.prev = node;
            this.head = node;
        }
        this.length++;
        return node;
    }

    /**
     * Retrieves the node at the given index in the doubly linked list.
     * @param {number} index - The index of the node to retrieve.
     * @returns {Node<T> | null} - The node at the given index or null if the index is out of range.
     */
    get(index) {
        if (index === undefined) return null;
        // TODO: add type checks everywhere
        if (typeof index === 'string') return null;
        if (index % 1 !== 0) return null;

        if (index < 0 || index >= this.length) return null;
        let mid = Math.floor(this.length / 2);

        var counter, current;

        if (index <= mid) {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                if (current) {
                    current = current.next;
                    counter++;
                }
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                if (current) {
                    current = current.prev;
                    counter--;
                }
            }
        }
        return current;
    }

    /**
     * Sets the value of the node at the given index in the doubly linked list.
     * @param {number} index - The index of the node to set the value for.
     * @param {T} value - The new value to be set.
     * @returns {Node<T> | null} - The node at the given index after the value has been set, or null if the index is out of range.
     */
    set(index, value) {
        let node = this.get(index);

        if (node !== null) {
            node.value = value;
            return node;
        }
        return null;
    }

    /**
     * Inserts a new value at the given index in the doubly linked list.
     * @param {number} index - The index at which to insert the new value.
     * @param {T} value - The value to be inserted.
     * @returns {Node<T> | null} - The newly inserted Node or null if the index is out of range.
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        if (beforeNode) {
            let afterNode = beforeNode.next;
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            if (afterNode) {
                newNode.next = afterNode;
                afterNode.prev = newNode;
                this.length++;
                return newNode;
            }
        }
        return null;
    }

    /**
     * Removes the node at the given index from the doubly linked list.
     * @param {number} index - The index of the node to remove.
     */
    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        if (removedNode) {
            if (removedNode.prev && removedNode.next) {
                removedNode.prev.next = removedNode.next;
                removedNode.next.prev = removedNode.prev;
                removedNode.next = null;
                removedNode.prev = null;
                this.length--;
            }
        }
    }

    /**
     * Traverses the doubly linked list and logs each value to the console.
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
 * Represents an interface for a doubly linked list data structure.
 * @template T - The type of values stored in the doubly linked list.
 */
class IDoublyLinkedList {
    /**
     * Adds a new value to the end of the doubly linked list.
     * @param {T} value - The value to be added.
      * @returns {Node<T>} - The newly added Node.
 */
    push(value) { }

    /**
     * Removes the value from the end of the doubly linked list.
     */
    pop() { }

    /**
     * Removes the value from the front of the doubly linked list.
     */
    shift() { }

    /**
     * Adds a new value to the front of the doubly linked list.
     * @param {T} value - The value to be added.
     * @returns {Node<T>} - The newly added Node.
     */
    unshift(value) { }

    /**
     * Retrieves the node at the given index in the doubly linked list.
     * @param {number} index - The index of the node to retrieve.
     * @returns {Node<T> | null} - The node at the given index or null if the index is out of range.
     */
    get(index) { }

    /**
     * Sets the value of the node at the given index in the doubly linked list.
     * @param {number} index - The index of the node to set the value for.
     * @param {T} value - The new value to be set.
     * @returns {Node<T> | null} - The node at the given index after the value has been set, or null if the index is out of range.
     */
    set(index, value) { }

    /**
     * Inserts a new value at the given index in the doubly linked list.
     * @param {number} index - The index at which to insert the new value.
     * @param {T} value - The value to be inserted.
     * @returns {Node<T> | null} - The newly inserted Node or null if the index is out of range.
     */
    insert(index, value) { }

    /**
     * Removes the node at the given index from the doubly linked list.
     * @param {number} index - The index of the node to remove.
     */
    remove(index) { }

    /**
     * Traverses the doubly linked list.
     */
    traverse() { }
}
