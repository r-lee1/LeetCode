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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    if (root === null) return 0;

    const longestPath = (node) => {
        let leftPath = 0;
        let rightPath = 0;

        if (node.left) leftPath = longestPath(node.left);
        if (node.right) rightPath = longestPath(node.right);

        diameter = Math.max(leftPath + rightPath, diameter);
        return Math.max(leftPath, rightPath) + 1;
    };

    longestPath(root);
    return diameter;
};

// Time: O(N) - calling longestPath on each node once
// Space: O(N) - size of call stack during DFS, which is the height of the tree. In worst case, the tree is skewed so the height of the tree is O(N). If the tree is balanced, it is O(logN).



/*
The diameter is the longest path from root to deepest leaf of left subtree + longest path from root to deepest leaf of right subtree.
1. From the root, traverse down the left subtree. Keep track of the length of path.
2. Do the same for right subtree.
3. For each node, the longest path in the tree could be from leaf nodes in its left and right subtree. So if the sum of the left and right path is greater than diameter, then set it as the new diameter.
4. Return the longer of the left path and right path, add 1 to account for edge to the parent node.

Algorithm:
1. Initialize diameter to keep track of the longest path we find
2. The recursive function, longestPath, takes a node as input.
    - Call longestPath on node's existing left and right children.
    - Set the return value of the calls as leftPath and rightPath.
    - The longest path found at the current node is the sum of the longest path of its left and right children. Compare this value to the current diameter and set diameter as the larger of the two.
    - Return from this call the longer of the longest path of its left and right children plus 1 (account for edge from child to current node). Because only the longer branch needs to be considered to find the longest path in the tree.
3. Call longestPath with root.
4. Return diameter.
*/
