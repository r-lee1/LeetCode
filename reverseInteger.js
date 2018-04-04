/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
const reverse = function(x) {
    let digits = x.toString().split("");
    let result = "";

    if (x === 0) {
        return 0;
    }

    while(digits[digits.length - 1] === 0) {
        digits.pop();
    }

    while(digits.length > 0) {
        result += digits.pop();
    }

    result = parseInt(result);

    if (x < 0) {
        result *= -1;
    }

    if (result > 2147483647 || result < -2147483647) {
        return 0;
    }

    return result;
};
