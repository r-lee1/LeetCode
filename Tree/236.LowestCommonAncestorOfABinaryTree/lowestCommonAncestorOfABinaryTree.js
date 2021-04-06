/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {
  let res = null;

  // Recurse the tree to find node with p and q in its left or right subtree or is itself p or q
  const recurseTree = (node, v, w) => {
      // return false if node is null because it won't be v or w and no subtree to recurse
      if (node === null) return false;

      // set boolean flags for left subtree, right subtree, and node itself to track if v or w is found
      // Return 1 if p or q is found, return 0 if it isn't
      let left = recurseTree(node.left, v, w) ? 1 : 0;
      let right = recurseTree(node.right, v, w) ? 1 : 0;
      let mid = (node === v || node === w) ? 1 : 0;

      // Since p and q are unique, if both values are found in the left/right subtree or node itself, there will be two true flags
      // if two flags are true then that means this node is the lowest common ancestors
      // this is the node furthest from the root that has both v and w as descendants
      if (left + right + mid >= 2) {
        res = node;
      }

      // return true if a flag is true, that means v or w is found and the node has v or w as a descendant
      return (left + right + mid > 0);
  };
  recurseTree(root, p, q);
  return res;
};

/*
Time: O(N)
Space: O(N)
*/

// Iterative Solution using Parent Pointers

// const lowestCommonAncestor = (root, p, q) => {
//     if (root === null) return null;
//     const parent = {}; // Keep parent pointers to backtrack up the ancestor chain
//     const stack = []; // Stack for DFS traversal of the tree;
//     parent[root.val] = null; // Root node does not have a parent, set this to know when to                            // stop when backtracking the ancestor chain
//     stack.push(root);

//     // Keep traversing the tree, keeping track of each node's parent, until p and q are found
//     while (!parent.hasOwnProperty(p.val) || !parent.hasOwnProperty(q.val)) {
//         let node = stack.pop();
//         if (node.left) {
//             parent[node.left.val] = node;
//             stack.push(node.left);
//         }
//         if (node.right) {
//             parent[node.right.val] = node;
//             stack.push(node.right);
//         }
//     }

//     const ancestorsP = new Set(); // Travel up p's branch, keep a set of the ancestors of p
//     while (p !== null) {
//         ancestorsP.add(p);
//         p = parent[p.val];
//     }

//     // Look for the first node in q's branch that is also an ancestor of p. This is the LCA.
//     while (!ancestorsP.has(q)) {
//         q = parent[q.val];
//     }

//     return q;
// };

/*
Time: O(N)
Space: O(N)
*/

/*
Attempt #1
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
29/31 test cases passed
*/
// var lowestCommonAncestor = function(root, p, q) {
//     if (root === null) return null;
//     const ancestorsMap = {};
//
//     const helper = (node, ancestors) => {
//         if (node === null) return;
//         let newAncestors = [];
//         for (let i = 0; i < ancestors.length; i++) {
//             newAncestors.push(ancestors[i]);
//         }
//         newAncestors.push(node);
//         ancestorsMap[node.val] = newAncestors;
//         if (node.left) helper(node.left, newAncestors);
//         if (node.right) helper(node.right, newAncestors);
//     };
//
//     helper(root, []);
//     let pAncestors = ancestorsMap[p.val];
//     let qAncestors = ancestorsMap[q.val];
//     let listLength = Math.max(pAncestors.length, qAncestors.length);
//
//     for (let i = listLength - 1; i >= 0; i-- ) {
//         if (pAncestors[i] && qAncestors[i] && pAncestors[i].val === qAncestors[i].val) {
//             return pAncestors[i];
//         }
//     }
//
//     return root;
// };
/*
Time: O(N^2)
Space: O(N)
*/
