---
title: Merge two sorted Linklists
published_at: 2023-04-1
tags: easy
---

```
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
```

# Solution

## Javascript

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

function mergeTwoLists(list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
```

## Ruby

```ruby
class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end
end

def merge_two_lists(list1, list2)
  return list2 if list1.nil?
  return list1 if list2.nil?

  if list1.val < list2.val
    list1.next = merge_two_lists(list1.next, list2)
    list1
  else
    list2.next = merge_two_lists(list1, list2.next)
    list2
  end
end
```

### Test cases

- \[1,2,4\], \[1,3,4\] → \[1,1,2,3,4,4\]
- \[\],\[\] → \[\]
