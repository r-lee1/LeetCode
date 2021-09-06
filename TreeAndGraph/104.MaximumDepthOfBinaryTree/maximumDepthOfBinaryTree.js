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
var maxDepth = function(root) {
    let max = 0;
    if (root === null) return maxDepth;

    const helper = (node, depth) => {
        maxDepth = Math.max(depth, max);
        if (node.left) helper(node.left, depth + 1);
        if (node.right) helper(node.right, depth + 1);
    };

    helper(root, 1);
    return max;
};

/*
Time: O(N) - call each node
Space: O(N) - size of call stack is the height of the tree, worst case N for skewed tree. O(logN) for balanced tree
*/
