---
title: Valid parentheses
published_at: 2023-03-31
tags: easy
---

```
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```

# Solution

## JS

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (brackets[char]) {
            // If it's an opening bracket, push to stack
            stack.push(char);
        } else {
            // If it's a closing bracket, pop from stack and check if matches
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets were properly closed
    return stack.length === 0;

};
```

## Ruby

```
# @param {String} s
# @return {Boolean}
def is_valid(s)
   stack = []
  brackets = {
    '(' => ')',
    '{' => '}',
    '[' => ']'
  }

  s.each_char do |char|
    if brackets.key?(char)
      # If it's an opening bracket, push to stack
      stack.push(char)
    else
      # If it's a closing bracket, pop from stack and check if matches
      return false if brackets[stack.pop] != char
    end
  end

  # If stack is empty, all brackets were properly closed
  stack.empty?
end
```

### Test cases

- "()\[\]{}" - valid
- "()" - valid
- "{\]} - invalid
