/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverseKGroup = (head, k) => {

    // Helper function to get k nodes from the given list and reverse it. Returns the new k group head.
    const reverseLinkedList = (head, k) => {
        let prev = null;
        let curr = head;

        while (k > 0) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            k--;
        }

        return prev;
    };

    let ptr = head;
    let ktail = null; // To connect k groups after reversal
    let newHead = null; // This will be the head of the result reversed list

    // Continue until end of given list is hit
    while (ptr !== null) {
        let count = 0;
        let groupHead = ptr;

        // Move pointer k nodes down
        while (count < k && ptr !== null) {
            ptr = ptr.next;
            count++;
        }

        // If k nodes are counted, reverse the k group
        if (count === k) {
            // Keep track of the new head of the k group
            let revHead = reverseLinkedList(groupHead, k);

            // The new head of the resulting reveresed list will be the head of the first reversed k group
            if (newHead === null) newHead = revHead;

            // The tail of the previous reversed k group is connected to the new head of the current reversed k group
            if (ktail !== null) ktail.next = revHead;
        } else {
            // If there are less than k nodes left,
            // the tail of previous reversed k group is connected to current head of the un-reversed portion
            if (ktail !== null) ktail.next = groupHead;
        }
        // Set ktail (new tail for current k group) for the next k group, if there will be more nodes to look at
        if (ptr !== null) ktail = groupHead;
    }

    // Return new head if there was a reversed k group, or original head if nothing was reversed
    return newHead === null ? head : newHead;
};

/*
Time: O(N)
Space: O(1)
*/


// var reverseKGroup = function(head, k) {
//     let p = head;
//     let q = head;
//     let ktail = undefined;
//     let res = head;

//     const reverseList = (start, end) => {
//         let curr = start;
//         let prev = end.next;
//         let stop = end.next;
//         ktail = start;
//         while (curr !== stop) {
//             let temp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = temp;
//         }
//         p = curr;
//         return end;
//     };

//     while (p !== null) {
//          q = p;
//          for (let i = 1; i < k; i++) {
//             if (q === null) return res;
//             q = q.next;
//         }
//         if (p === head) res = q;
//         if (ktail !== undefined) ktail.next = reverseList(p, q);
//         else reverseList(p, q);
//     }

//     return res;
// };

// /*
// -Have pointer p,q to set the start and end of sublist to reverse
//     -When getting initial sublist, q will become the new head of the linked list, set q to head
//     -When q is hits null, return head
// -Reverse the list, with p pointing to q.next instead of null

// */
