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

//Recursive

// const isSymmetric = (root) => {
//     if (root === null) return true;
//     return helper(root.left, root.right);
// };
//
// const helper = (n1, n2) => {
//     if (n1 === null && n2 === null) return true;
//     if (n1 === null || n2 === null) return false;
//     return (n1.val === n2.val) && helper(n1.left, n2.right) && helper(n1.right, n2.left);
// };


// var isSymmetric = function(root) {
//     const leftSubtree = helperL(root.left);
//     const rightSubtree = helperR(root.right);

//     if (leftSubtree.length !== rightSubtree.length) return false;

//     for (let i = 0; i < leftSubtree.length; i++) {
//         if (leftSubtree[i] !== rightSubtree[i]) return false;
//     }

//     return true;
// };

// const helperL = (node) => {
//     if (node === null) return [null];
//     let left = helperL(node.left);
//     let right = helperL(node.right);

//     return [...left, ...right, node.val];
// }

// const helperR = (node) => {
//     if (node === null) return [null];
//     let right = helperR(node.right);
//     let left = helperR(node.left);

//     return [...right, ...left, node.val];
// }

// var isSymmetric = function(root) {
//
//     if (!root) {
//         return true;
//     }
//
//     return isMirror(root.left, root.right);
//
//
// };
//
// function isMirror(leftSubtreeRoot, rightSubtreeRoot) {
//
//     //Have separate queues for each subtree
//     let leftSubtreeQueue = [leftSubtreeRoot], rightSubtreeQueue = [rightSubtreeRoot];
//
//     //BST
//     while (leftSubtreeQueue.length > 0 || rightSubtreeQueue.length > 0) {
//
//         let leftSubtreeNode = leftSubtreeQueue.shift();
//         let rightSubtreeNode =  rightSubtreeQueue.shift();
//
//         if (!leftSubtreeNode && !rightSubtreeNode) {
//             continue;
//         }
//
//         if (!leftSubtreeNode || !rightSubtreeNode || leftSubtreeNode.val !== rightSubtreeNode.val) {
//             return false;
//         }
//
//         //Scan left subtree from left to right
//         //and right subtree from right to left
//
//         leftSubtreeQueue.push(leftSubtreeNode.left);
//         leftSubtreeQueue.push(leftSubtreeNode.right);
//         rightSubtreeQueue.push(rightSubtreeNode.right);
//         rightSubtreeQueue.push(rightSubtreeNode.left);
//
//     }
//
//     return true;
// }
