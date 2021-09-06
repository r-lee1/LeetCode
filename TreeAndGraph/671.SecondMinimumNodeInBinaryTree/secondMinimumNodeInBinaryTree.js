/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var findSecondMinimumValue = function(root) {

    const nodeStack = [];
    nodeStack.push(root);

    let minVal = root.val;
    let secondMin = -1;

    while (nodeStack.length) {
        const node = nodeStack.pop();

        //Sub-node value is same as root node (which is the minimum)
        //so look further down the subtree
        if (node.val === minVal) {
            if (node.left) {
                nodeStack.push(node.left);
            }

            if (node.right) {
                nodeStack.push(node.right);
            }
        }

        //Find a sub-node larger than root node means it could be the second minimum
        //set that value as the second minimum if one does not exist or it is
        //smaller than the current second minimum

        else if (minVal < node.val && (secondMin === -1 || node.val < secondMin)) {
            secondMin = node.val;
        }
    }

    return secondMin;
};
