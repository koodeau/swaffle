import { Node } from './types';

/**
 * Performs a Breadth-First Search (BFS) traversal on a binary tree.
 * @template T - The type of value stored in the nodes.
 * @param {Node<T> | null} root - The root node of the binary tree.
 * @returns {T[] | null} - An array containing the BFS traversal result or null if the tree is empty.
 */
export function bfs(root) {
    if (root === null || root === undefined) return root;
    
    /**
     * @type {T[]}
     */
    const visited = [];
    
    /**
     * @type {Node<T>[]}
     * @description A queue of nodes to visit.
     */
    const queue = []
    
    /**
     * @type {Node<T>}
     * @description The current node being visited.
     */
    let node
    queue.push(root)

    while (queue.length > 0) {
        node = queue.shift();
        if (node) {
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return visited;
}