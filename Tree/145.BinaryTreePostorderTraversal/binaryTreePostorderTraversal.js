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

const postorderTraversal = (root) => {
    const res = [];
    const stack = [];

    if (root === null) return res;
    stack.push(root);

    while(stack.length) {
        let curr = stack.pop();
        res.unshift(curr.val);
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    return res;
};



// // Recursive

// var postorderTraversal = function(root) {

//     function dfs(node) {
//         let res = [];
//         if (node === null) return res;

//         if (node.left) res = [...res, ...dfs(node.left)];
//         if (node.right) res = [...res, ...dfs(node.right)];

//         res.push(node.val);
//         return res;
//     }

//     return dfs(root);
// };
