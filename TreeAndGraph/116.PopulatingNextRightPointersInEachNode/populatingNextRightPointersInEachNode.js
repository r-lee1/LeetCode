/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// O(1) Space Solution
const connect = (root) => {
  let leftmost = root;

  //go through all levels of the tree
  while (leftmost.left !== null) {
    //go through each node in the current level, starting with leftmost as head
    let head = leftmost;
    while (head !== null) {
      head.left.next = head.right;
      // if there is a next node, the next of the right child is the left child of the next node,
      //or else it is null
      if (head.next) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }

    leftmost = leftmost.left;
  }

  return root;
};
/*
Use the pointer from current level to assign the next pointers for the next level:
1. Start with root node as leftmost node of the first level. The leftmost node is also the first node of each level.
2. Here are the possible connections for left and right child of head
    - The head.left.next should be head.right
    - The head.right is head.next.left if there is a head.next or else it is null
3. Once the current level is looped through, move the head to the leftmost node of the next level, which is the left child of the current leftmost node
4. if leftmost is null, then that means you have gone through the leaf nodes and
all the levels of the tree has been processed.

Time: O(N) - have to process connection of next pointer for all nodes
Space: O(1) - no additional data structure created for node traversal
*/



// var connect = function(root) {
//     if (root === null) return root;
//     let q = [];
//     q.push(root);
//
//     while (q.length) {
//         let size = q.length;
//         for (let i = 0; i < size; i++) {
//             let curr = q.shift();
//
//             if (i < size - 1) {
//                 curr.next = q[0];
//             }
//
//             if (curr.left) q.push(curr.left);
//             if (curr.right) q.push(curr.right);
//         }
//     }
//
//     return root;
// };

/*
Time: O(N) - traversing through every node
Space: O(N) - Last level of a perfect binary tree contains N/2 nodes. BFS has a space complexity of the space occupied by the queue, which is dependent on the max number of nodes in a particular level. Removing the constants, it would be O(N).
*/
