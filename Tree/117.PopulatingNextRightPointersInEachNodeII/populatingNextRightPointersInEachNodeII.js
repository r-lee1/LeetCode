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

 var connect = function(root) {
     if (root === null) return root;
     let leftmost = root; // We know the leftmost node of level 0 is the root

     // Loop through the levels of the tree
     while (leftmost !== null) {
         // Start at the leftmost node of a level
         let curr = leftmost;
         // Set leftmost to null so we can break out of the outer loop if no children is found
         leftmost = null;
         // Pointer to keep track of the child node we are connecting
         let temp = null;
         // Loop through the nodes of the current level
         while (curr !== null) {
             // Check the left and right child of each node
             if (curr.left) {
                 if (!temp) {
                     // The first temp found in the next level is the leftmost node of that level
                     // We need to store this information to know where to start when we move to the                       // next level
                     leftmost = curr.left;
                 } else {
                     // If a node on the next level has already been found, then this child node is the                     // next right node to that node
                     temp.next = curr.left;
                 }
                 // This child node will be the next node to connect
                 temp = curr.left;
             }
             if (curr.right) {
                 if (!temp) {
                     leftmost = curr.right;
                 } else {
                     temp.next = curr.right;
                 }
                 temp = curr.right;
             }
             curr = curr.next;
         }
     }

     return root;
 };
 /*
 Time: O(N)
 Space: O(1)
 */

/* Attempt
Submission Result: Wrong Answer
Input:
[0,2,4,1,null,3,-1,5,1,null,6,null,8]
Output:
[0,#,2,4,#,1,3,#,5,1,6,#]
Expected:
[0,#,2,4,#,1,3,-1,#,5,1,6,8,#]
*/
// var connect = function(root) {
//     let leftmost = root;
//
//     while (leftmost !== null) {
//         let head = leftmost;
//         let temp = null;
//         let tempNext = null;
//         // Go through all the nodes on this level to process the children
//         let parent = head;
//         while (parent !== null) {
//             // Set the temp and tempNext to connect children on this level
//             while (parent !== null && (!temp || !tempNext)) {
//
//                 if (parent.left) {
//                    if (!temp) {
//                        temp = parent.left;
//                        leftmost = temp;
//                    } else if (!tempNext) {
//                        tempNext = parent.left;
//                    }
//                 }
//                 if (parent.right) {
//                     if (!temp) {
//                         temp = parent.right;
//                         leftmost = temp;
//                     } else if (!tempNext) {
//                         tempNext = parent.right;
//                     }
//                 }
//                 parent = parent.next;
//             }
//             if (temp) temp.next = tempNext;
//             temp = tempNext;
//             tempNext = null;
//         }
//         if (!temp) leftmost = null;
//     }
//
//     return root;
// };
