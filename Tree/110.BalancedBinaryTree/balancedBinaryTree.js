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
var isBalanced = function(root) {
    return (maxDepth(root) !== null);
};

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

// If either one equals null, then at least one side is not balanced,
//so we know the whole tree is not balanced
  if (leftDepth === null || rightDepth === null) {
    return null;
  }

// The height difference is greater than 1
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return null;
  }

// Return the max depth of the tree
  return Math.max(leftDepth, rightDepth) + 1;
}
