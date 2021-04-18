/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p = l1;
    let q = l2;
    let res = new ListNode();
    let curr = res;

    while (p !== null || q !== null) {
        if (p !== null && q !== null) {
            if (p.val <= q.val) {
                curr.next = new ListNode(p.val);
                curr = curr.next;
                p = p.next;
            } else {
                curr.next = new ListNode(q.val);
                curr = curr.next;
                q = q.next;
            }
        } else if (p !== null) {
            curr.next = new ListNode(p.val);
            curr = curr.next;
            p = p.next;
        } else {
           curr.next = new ListNode(q.val);
            curr = curr.next;
            q = q.next;
        }
    }

    return res.next;
};

/*
Time: O (m+n)
Space: O(1)

Go through l1 and l2
Create a new list with sentinel node
Add the smaller of l1 and l2 to the new list
Return head of new list
*/
