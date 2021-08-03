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
var zigzagLevelOrder = function(root) {
  let result = [];

    const lot = (node, level) => {
        if (node === null) return;
        if (result[level]) {
           result[level].push(node.val);
        } else {
            result[level] = [node.val];
        }


        lot(node.left, level + 1);
        lot(node.right, level + 1);
    };

    lot(root, 0);

    result = result.map((b, i) => {
      if (i % 2) {
          return b.reverse();
      }  else {
          return b;
      }
    });

    return result;
};

/*
1. Start at root at level 1. Push the value of the node into result bucket at the appropriate index (level + 1).
2. Continue recursively to left child and right child.
3. Reverse the array at every odd index for zigzag order.

Time: O(N)
Space: O(N)
*/