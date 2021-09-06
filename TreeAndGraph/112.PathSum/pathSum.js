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
        sum += node.val;
        // if node is a leaf node and the targetSum is reached, then there is a valid path
        if (node.left === null && node.right === null && sum === targetSum) valid = true;

        // traverse down the left and right children, passing current sum
        if (node.left) getSum(node.left, sum);
        if (node.right) getSum(node.right, sum);
    };

    getSum(root, 0);
    return valid;
};

// var hasPathSum = function(root, targetSum) {
//     if (root === null) return false;

//     targetSum -= root.val;
//     if (root.left === null && root.right === null) {
//         return (targetSum === 0);
//     }

//     return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
// };

/*
Time: O(N)
Space: O(N)
*/
