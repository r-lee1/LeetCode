/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return root;
    let q = [];
    q.push(root);

    while (q.length) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let curr = q.shift();

            if (i < size - 1) {
                curr.next = q[0];
            }

            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }

    return root;
};

/*
Time: O(N) - traversing through every node
Space: O(N) - Last level of a perfect binary tree contains N/2 nodes. BFS has a space complexity of the space occupied by the queue, which is dependent on the max number of nodes in a particular level. Removing the constants, it would be O(N).
*/
