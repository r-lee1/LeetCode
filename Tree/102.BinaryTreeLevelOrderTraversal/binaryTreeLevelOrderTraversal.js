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
 * @return {number[][]}
 */

// Recursive

const levelOrder = (root) => {
    if (root === null) return [];
    const res = [];

    const helper = (node, level) => {
        if (level === res.length) res.push([]);

        res[level].push(node.val);
        if (node.left) helper(node.left, level + 1);
        if (node.right) helper(node.right, level + 1);
    };

    helper(root, 0);
    return res;
};

//Time: O(N) - Process each node
//Space: O(N) - Height of the tree for number of call stacks, worst case, a skewed tree that's a chain

// // Iterative

// var levelOrder = function(root) {
//     if (root === null) return [];
//     const res = [];
//     let q = [];
//     q.push(root);
//
//     while(q.length) {
//         let level = [];
//         let currentQLength = q.length;
//         for (let i = 0; i < currentQLength; i++) {
//             let node = q.shift();
//             level.push(node.val);
//             if (node.left) q.push(node.left);
//             if (node.right) q.push(node.right);
//         }
//
//         res.push(level);
//     }
//
//     return res;
// };

// /*
// 1. While there is node in queue visit each node in queue
//     - push the visited node to level
//     - add the left child and right child of each node to queue
// 2. Push the level to result
// 3. Return result

// Time: O(N) - Go through all the nodes
// Space: O(N) - The max number on nodes on a level, which is the leaf nodes on a balanced tree. The number of leaf nodes is (N+1)/2, ignoring the constant leaves O(N)
// */
