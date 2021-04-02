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
var countUnivalSubtrees = function(root) {
    let count = 0;

    const findUniValueSubtree = (node) => {
        if (node === null) return [null, true];
        let left = findUniValueSubtree(node.left);
        let right = findUniValueSubtree(node.right);

        if (left[1] && right[1] &&
            (left[0] === node.val || left[0] === null) &&
            (right[0] === node.val || right[0] === null)) {
            count++;
            return [node.val, true];
        } else {
            return [node.val, false];
        }
    };

    findUniValueSubtree(root);
    return count;
};

/*
Time: O(N)
Space: O(N)
*/
