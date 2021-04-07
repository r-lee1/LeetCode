/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/* DFS - Preorder solution
Time: O(N) - call on all nodes for serialize and deserialize
Space: O(N) - store all nodes for serialize and deserialize
*/

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    let res = '';
    const dfs = (node) => {
        if (node === null) {
            res += 'null,';
            return;
        }

        res += node.val.toString() + ",";
        dfs(node.left);
        dfs(node.right);
        return;
    };

    dfs(root);
    return res.slice(0,res.length-1);
};

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */

var deserialize = function(data) {
    data = data.split(',');

    const dfs = () => {
        let node = data.shift();
        if (node === "null") return null;

        let newNode = new TreeNode(parseInt(node));
        newNode.left = dfs();
        newNode.right = dfs();

        return newNode;
    };

    return dfs();
};

// /**
//  * Your functions will be called as such:
//  * deserialize(serialize(root));
//  */



// // BST solution

// const serialize = (root) => {
//     let res = '';
//     if (root === null) return '';
//     const q = [root];

//     while (q.length) {
//         let node = q.shift();
//         if (node === null) {
//             res += 'null,'
//         } else {
//             res += node.val + ',';
//             q.push(node.left);
//             q.push(node.right);
//         }
//     }

//     return res.slice(0, res.length - 1);
// };

// const deserialize = (data) => {
//     if (data === '') return null;
//     data = data.split(',');
//     let root = new TreeNode(parseInt(data.shift()));
//     const q = [root];

//     while (q.length) {
//         let curr = q.shift();
//         let leftVal = data.shift();
//         let left = null;

//         if (leftVal !== 'null') {
//             left = new TreeNode(parseInt(leftVal));
//             q.push(left);
//         }
//         curr.left = left;

//         let rightVal = data.shift();
//         let right = null;

//         if (rightVal !== 'null') {
//             right = new TreeNode(parseInt(rightVal));
//             q.push(right);
//         }
//         curr.right = right;
//     }

//     return root;
// };
