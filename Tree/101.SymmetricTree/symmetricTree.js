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

/*

*/
var isSymmetric = function(root) {

    if (!root) {
        return true;
    }

    return isMirror(root.left, root.right);


};

function isMirror(leftSubtreeRoot, rightSubtreeRoot) {

    //Have separate queues for each subtree
    let leftSubtreeQueue = [leftSubtreeRoot], rightSubtreeQueue = [rightSubtreeRoot];

    //BST
    while (leftSubtreeQueue.length > 0 || rightSubtreeQueue.length > 0) {

        let leftSubtreeNode = leftSubtreeQueue.shift();
        let rightSubtreeNode =  rightSubtreeQueue.shift();

        if (!leftSubtreeNode && !rightSubtreeNode) {
            continue;
        }

        if (!leftSubtreeNode || !rightSubtreeNode || leftSubtreeNode.val !== rightSubtreeNode.val) {
            return false;
        }

        //Scan left subtree from left to right
        //and right subtree from right to left

        leftSubtreeQueue.push(leftSubtreeNode.left);
        leftSubtreeQueue.push(leftSubtreeNode.right);
        rightSubtreeQueue.push(rightSubtreeNode.right);
        rightSubtreeQueue.push(rightSubtreeNode.left);

    }

    return true;
}
