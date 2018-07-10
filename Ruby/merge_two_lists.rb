# Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
#
# Example:
#
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

def merge_two_lists(l1, l2)
  pointer1 = l1
  pointer2 = l2
  l3 = ListNode.new(0)
  currentNode = l3

  loop do
    if pointer1.nil?
      currentNode.next = pointer2
      return l3.next
    elsif pointer2.nil?
      currentNode.next = pointer1
      return l3.next
    end

    if pointer1.val <= pointer2.val
      currentNode.next = pointer1
      currentNode = pointer1
      pointer1 = pointer1.next
    else
      currentNode.next = pointer2
      currentNode = pointer2
      pointer2 = pointer2.next
    end
  end

  l3.next
end
