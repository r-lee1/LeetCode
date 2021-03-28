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

// const preorderTraversal = (root) => {
//     if (root === null) return [];
//     const stack = [root];
//     const traversal = [];

//     while(stack.length) {
//         let curr = stack.pop();
//         traversal.push(curr.val);
//         if (curr.right) stack.push(curr.right);
//         if (curr.left) stack.push(curr.left);
//     }

//     return traversal;
// }


// Recursive
//
var preorderTraversal = function(root) {
    return helper(root);
};

const helper = (node) => {
    let res = [];
    if (node === null) return res;

    res.push(node.val);
    if (node.left) res = res.concat(helper(node.left));
    if (node.right) res = res.concat(helper(node.right));
    return res;
};
