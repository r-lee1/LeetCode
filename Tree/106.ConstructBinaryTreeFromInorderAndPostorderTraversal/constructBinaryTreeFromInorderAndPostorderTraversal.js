/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let rootIdx = postorder.length - 1;
    const inorderIdxMap = {};

    for (let i = 0; i < inorder.length; i++) {
        inorderIdxMap[inorder[i]] = i;
    }

    const helper = (startIdx, endIdx) => {
        // if there is no elements to construct subtrees
        if (startIdx > endIdx) return null;

        // pick up the root value from postorder list and create new root node
        let rootVal = postorder[rootIdx];
        let root = new TreeNode(rootVal);

        // knowing the root, inorder list can be split into left and right subtrees
        let index = inorderIdxMap[rootVal];

        // recursion
        // move up postorder list to the next root value
        rootIdx--;
        // build right subtree
        root.right = helper(index + 1, endIdx);
        // build left subtree
        root.left = helper(startIdx, index - 1);
        return root;
    };

    return helper(0, inorder.length - 1);

};
