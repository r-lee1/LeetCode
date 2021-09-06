/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Keep track of the root idx to get root value from preorder list
    let rootIdx = 0;
    // Keep track of indices in inorder list to get the bounds for left and right subtrees
    const inorderIdxMap = {};
    for (let i = 0; i < inorder.length; i++) {
        inorderIdxMap[[inorder[i]]] = i;
    }

    const helper = (startIdx, endIdx) => {
        // if there is no more elements to look at for subtrees, return null;
        if (startIdx > endIdx) return null;

        let rootVal = preorder[rootIdx];
        let root = new TreeNode(rootVal);

        rootIdx++;
        let inorderRootIdx = inorderIdxMap[rootVal];
        root.left = helper(startIdx, inorderRootIdx - 1);
        root.right = helper(inorderRootIdx + 1, endIdx);

        return root;
    };

    return helper(0, inorder.length - 1);
};

/*
Time: O(N) for building the hash map and O(N) for building the tree making N recursive calls; O(N)
Space: O(N) to store the tree, O(N) to build hash map, O(N) call stacks which is height of the tree in worst case
*/
