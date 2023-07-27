import { Node } from './types'

/**
 * Performs a pre-order traversal on a binary tree.
 * @template T - The type of value stored in the nodes.
 * @param {Node<T> | null} root - The root node of the binary tree.
 * @returns {T[] | null} - An array containing the pre-order traversal result or null if the tree is empty.
 */
export function preOrder(root) {
    if (root === null || root === undefined) return root;

    /**
     * @type {T[]}
     */
    let visited = [];
  
    /**
     * @type {Node<T> | null}
    */
    let current = root;

    function traverse(node) {
        visited.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
}