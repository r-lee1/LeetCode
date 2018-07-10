# Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
#
# Example:
#
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

def merge_two_lists(l1, l2)
  l3 = ListNode.new(0)
  currentNode = l3

  loop do
    if l1.nil?
      currentNode.next = l2
      return l3.next
    elsif l2.nil?
      currentNode.next = l1
      return l3.next
    end

    if l1.val <= l2.val
      currentNode.next = l1
      currentNode = l1
      l1 = l1.next
    else
      currentNode.next = l2
      currentNode = l2
      l2 = l2.next
    end
  end

  l3.next
end
