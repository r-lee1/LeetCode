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
 * @return {number[]}
 */

// Iterative
const inorderTraversal = (root) => {
    const res = [];
    if (root === null) return res;
    const stack = [];
    let curr = root;

    while (curr || stack.length) {

        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right;
        }
    }

    return res;
};


// Recursive
//
// var inorderTraversal = function(root) {
//     return dfs(root);
// };

// const dfs = (node) => {
//     let traversal = [];
//     if (node === null) return traversal;

//     if (node.left) traversal = traversal.concat(dfs(node.left));
//     traversal.push(node.val);
//     if (node.right) traversal = traversal.concat(dfs(node.right));

//     return traversal;
// }
