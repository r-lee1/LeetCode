/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Floyd's Tortoise and Hare

const detectCycle = (head) => {
    let s = head;
    let f = head;

    while (f !== null && f.next !== null) {
        s = s.next;
        f = f.next.next;
        if (s === f) break;
    }

    if (f === null || f.next === null) return null;

    s = head;

    while (s !== f) {
        s = s.next;
        f = f.next;
    }

    return s;
};

/*
Time: O(N)
Space: O(1)
*/

// var detectCycle = function(head) {
//     const nodes = new Set;
//     let curr = head;

//     // Keep checking the list while curr has not been seen and curr is not the end
//     while (curr !== null) {
//         if (nodes.has(curr)) return curr;
//         nodes.add(curr);
//         curr = curr.next;
//     }

//     if (curr === null) return null;
//     else return curr;
// };

// /*

// Time: O(N);
// Space: O(N);

// */
