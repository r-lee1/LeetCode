# Reverse a singly linked list.
#
# Example:
#
# Input: 1->2->3->4->5->NULL
# Output: 5->4->3->2->1->NULL
# Follow up:
#
# A linked list can be reversed either iteratively or recursively. Could you implement both?

#Iterative Solution
def reverse_list(head)
  return if head == nil

  prev = nil
  current = head
  nextNode = head.next

  until nextNode == nil
    current.next = prev
    prev = current
    current = nextNode
    nextNode = nextNode.next
  end

  current.next = prev
  current
end
