import { Node } from './types';

/**
 * Performs an in-order traversal on a binary tree.
 * @template T - The type of value stored in the nodes.
 * @param {Node<T> | null} root - The root node of the binary tree.
 * @returns {T[] | null} - An array containing the in-order traversal result or null if the tree is empty.
 */
export function inOrder(root) {
    if (root === null || root === undefined) return root;
    
    /**
     * @type {T[]}
     */
    const visited = [];

    /**
     * @type {Node<T> | null}
     * */
    const current = root;

    /**
     * @param {Node<T>} node - The current node.
     */
    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
}
