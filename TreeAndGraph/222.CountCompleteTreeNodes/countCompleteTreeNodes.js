/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
   let count = 0;
    if (root === null) return count;
    const queue = [root];

    while (queue.length > 0) {
        const curr = queue.shift();
        count++;
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }

    return count;
};

// Time: O(N) - process all nodes
// Space: O((N+1)/2) -> O(N) - all leaf nodes