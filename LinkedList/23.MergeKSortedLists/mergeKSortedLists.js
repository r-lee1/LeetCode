/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Brute Force
const mergeKLists = (lists) => {
    const nodes = [];
    let head = new ListNode(0);
    let curr = head;

    for (let i = 0; i < lists.length; i++) {
        while (lists[i] !== null) {
            nodes.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }

    nodes.sort((a,b) => a - b);

    for (let i = 0; i < nodes.length; i++) {
        curr.next = new ListNode(nodes[i]);
        curr = curr.next;
    }

    return head.next;
};

/*
Time: O(nlogn)
Space: O(n)
*/

// var mergeKLists = function(lists) {
//     let curr = new ListNode();
//     let res = curr;
//     let s1 = [];
//     let s2 =[];
//     let notEmpty = true;

//     while (notEmpty) {
//         notEmpty = false;
//         for (let i = 0; i < lists.length; i++) {
//             if (lists[i] !== null && s1.length === 0) {
//                 s1.push(lists[i]);
//             } else if (lists[i] !== null) {
//                 while (lists[i].val > s1[s1.length-1].val) {
//                     s2.push(s1.pop());
//                 }
//                 s1.push(lists[i]);
//                 while (s2.length !== 0) {
//                     s1.push(s2.pop());
//                 }
//                 notEmpty = true;
//             }

//         }
//     }

//     while (s1.length !== 0) {
//         curr.next = s1.pop();
//         curr = curr.next;
//     }

//     return res.next;
// };
