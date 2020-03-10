/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {

    if (!root) {
        return true;
    }

    const nodeStack = [];
    nodeStack.push({
        node: root,
        upperBound: Number.POSITIVE_INFINITY,
        lowerBound: Number.NEGATIVE_INFINITY
    });

    while (nodeStack.length) {
        const { node, upperBound, lowerBound } = nodeStack.pop();

        if (node.val >= upperBound || node.val <= lowerBound) {
            return false;
        }

        if (node.left) {
            nodeStack.push({
                node: node.left,
                upperBound: node.val,
                lowerBound
            });
        }

        if (node.right) {
            nodeStack.push({
                node: node.right,
                upperBound,
                lowerBound: node.val
            });
        }
    }

    return true;
};
