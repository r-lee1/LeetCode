/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    let s = head;
    let f = head;

    while (f !== null && f.next !== null) {
        s = s.next;
        f = f.next.next;
        if (s === f) return true;
    }

    return false;
};

/*
Time: O(N)
Space: O(1)

Have two pointers
    - slow - moving forward 1 node at a time
    - fast - moving forward 2 nodes at a time
If the pointers meet, then there is a cycle
If the fast pointer gets to the end then there is no cycle
*/
