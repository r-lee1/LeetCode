/**
 * @param {number} x
 * @return {boolean}
 */

/*
Solution 1
- Convert x to string
- Have a frontIdx pointer and endIdx pointer
- If the char at front and end pointer are different, then return false
- Continue until front >= end
*/

var isPalindrome = function(x) {

    if (x < 0) {
        return false;
    }

    const intToString = x.toString();

    let frontIdx = 0;
    let endIdx = intToString.length - 1;

    while (frontIdx <= endIdx) {
        const frontChar = intToString[frontIdx];
        const endChar = intToString[endIdx];

        if (frontChar !== endChar) {
            return false;
        }

        frontIdx++;
        endIdx--;
     }

    return true;
};
