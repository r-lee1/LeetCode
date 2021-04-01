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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    let valid = false;
    const getSum = (node, sum) => {
        if (node.left === null && node.right === null && sum === targetSum) valid = true;

        if (node.left) getSum(node.left, sum + node.left.val);
        if (node.right) getSum(node.right, sum + node.right.val);
    };

    getSum(root, root.val);
    return valid;
};

/*
Time: O(N)
Space: O(N)
*/
