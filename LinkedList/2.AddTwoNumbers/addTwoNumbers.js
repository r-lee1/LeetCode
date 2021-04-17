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
var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let res = new ListNode();
    let resHead = res;
    let carry = 0;

    while (p1 !== null || p2 !== null) {
        let sum = 0;
        let ones = 0;
        if (p1 !== null && p2 !== null) {
            sum = p1.val + p2.val + carry;
            p1 = p1.next;
            p2 = p2.next;
        } else if (p1 !== null && p2 === null) {
            sum = p1.val + carry;
            p1 = p1.next;
        } else if (p1 === null && p2 !== null) {
            sum = p2.val + carry;
            p2 = p2.next;
        }
            carry = Math.floor(sum / 10);
            ones = sum - (carry * 10);
            res.next = new ListNode(ones);
            res = res.next;
    }

    if (carry > 0) res.next = new ListNode(carry);

    return resHead.next;
};

/*

Time: O max(n, m)
Space: O(1) - not counting res, O max(n, m) - counting res


- Have two pointers to go througn l1 and l2
    - Add the l1 node and l2 node value
    - Keep track of remainder and ones place
    - Watch for l1 node or l2 node being null
    - Loop until l1 and l2 are both null

- Have a new list
    - Create a new node with the ones place of sum (l1 node + l2 node + remainder)
    - If there is remainder leftover after going through l1 & l2, create node with remainder as the last node in list


*/
