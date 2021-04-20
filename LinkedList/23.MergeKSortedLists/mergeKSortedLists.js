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

// Compare one by one using priority queue //TODO: resolve error
const mergeKLists = (lists) => {
    let q = new PriorityQueue();
    for (let list of lists) {
        if (list) {
            q.enqueue(list, list.val);
        }
    }
    let head = new ListNode();
    let curr = head;

    while(!q.isEmpty()) {
        let node = q.dequeue();
        let val = node.priority;
        curr.next = new ListNode(val);
        curr = curr.next;
        node = node.next;
        if (node) q.enqueue(node, val);
    }

    return head.next;
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    dequeue() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }


    bubbleUp(idx = this.values.length - 1) {
        if (idx <= 0) return;
        let parentIdx = Math.floor((idx - 1)/2);
        if (this.values[idx].priority <= this.values[parentIdx].priority) {
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
        }
        this.bubbleUp(parentIdx);
    }

    bubbleDown(idx = 0, swapIdx = null) {
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;
        let length = this.values.length;

        if (leftIdx < length) {
            if (this.values[leftIdx].priority <= this.values[idx].priority) {
                swapIdx = leftIdx;
            }
        }

        if (rightIdx < length) {
            if (swapIdx === null && this.values[rightIdx].priority <= this.values[idx].priority || swapIdx !== null && this.values[rightIdx].priority <= this.values[leftIdx].priority) {
                swapIdx = rightIdx;
            }
        }

        if (swapIdx !== null) {
            [this.values[swapIdx], this.values[idx]] = [this.values[idx], this.values[swapIdx]];
            this.bubbleDown(swapIdx, null);
        }
    }

    isEmpty() {
        return !this.values.length;
    }
}

// // Compare one-by-one (need to debug)

// const mergeKLists = (lists) => {
//     let curr = new ListNode();
//     let res = curr;
//     let min = Infinity;

//     const findMinNode = () => {
//         let index = -1;

//         for (let i = 0; i < lists.length; i++) {
//             if (lists[i] === null) continue;
//             if (lists[i].val <= min) {
//                 min = lists[i].val;
//                 index = i;
//             }
//         }

//         let minNode = null;
//         if (index !== -1) {
//             minNode = lists[index];
//             lists[index] = lists[index].next;
//         }
//         return minNode;
//     }

//     let minNode = findMinNode();
//     while (minNode) {
//         curr.next = minNode;
//         curr = curr.next;
//         minNode = findMinNode();
//     }

//     return res.next;
// }

// // Brute Force
// const mergeKLists = (lists) => {
//     const nodes = [];
//     let head = new ListNode(0);
//     let curr = head;

//     for (let i = 0; i < lists.length; i++) {
//         while (lists[i] !== null) {
//             nodes.push(lists[i].val);
//             lists[i] = lists[i].next;
//         }
//     }

//     nodes.sort((a,b) => a - b);

//     for (let i = 0; i < nodes.length; i++) {
//         curr.next = new ListNode(nodes[i]);
//         curr = curr.next;
//     }

//     return head.next;
// }

// /*
// Time: O(nlogn)
// Space: O(n)
// */

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
