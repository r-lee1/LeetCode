/**
 * Initialize your data structure here.
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
    get(index) {
        this.printList();
        let count = 0;
        let curr = this.head;
        while (count < this.length) {
            if (count === index) {
                return curr.val;
            } else {
                count++;
                curr = curr.next;
            }
        }
        return -1;
    }

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
    addAtHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
    }

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
    addAtTail(val) {
        let newNode = new Node(val);
        let prev = this.head;
        if (prev === null) {
            this.head = newNode;
            this.length++;
            return;
        }
        while (prev.next !== null) {
            prev = prev.next;
        }

        prev.next = newNode;
        this.length++;
    }

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.length) {
            this.addAtTail(val);
            return;
        }
        if (index > this.length) return;
        let newNode = new Node(val);
        let count = 1;
        let prev = this.head;
        while(count !== index) {
            prev = prev.next;
            count++;
        }

        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
    }

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
    deleteAtIndex(index) {
        if (index >= this.length) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let prev = this.head;
        let count = 1;
        while (count !== index) {
            prev = prev.next;
            count++;
        }
        prev.next = prev.next.next;
        this.length--;
    }

    printList() {
        let list = [];
        let curr = this.head;
        while(curr !== null) {
            list.push(curr.val);
            curr = curr.next;
        }
        console.log(list);
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/*
head
  6-1-2-0-4

*/
