import { Node } from './types';

/**
 * Performs a post-order traversal on a binary tree.
 * @template T - The type of value stored in the nodes.
 * @param {Node<T> | null} root - The root node of the binary tree.
 * @returns {T[] | null} - An array containing the post-order traversal result or null if the tree is empty.
 */
export function postOrder(root) {
    if (root === null || root === undefined) return root;
    
    /**
     * @type {T[]}
     */
    const visited = [];

    /**
     * @type {Node<T> | null}
     */
    const current = root;

    /**
     * @param {Node<T>} node 
     */
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.value);
    }
    traverse(current);
    return visited;
}
