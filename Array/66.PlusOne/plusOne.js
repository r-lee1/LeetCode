/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    digits.unshift(0);
    digits[digits.length - 1] += 1;

    for (let i = digits.length - 1; i > 0; i--) {
        const digit = digits[i] % 10;
        const carryOver = Math.floor(digits[i]/10);

        digits[i] = digit;
        digits[i-1] += carryOver;
    }

    if(digits[0] === 0) digits.shift();
    return digits;
};

// Time: O(N), Space: O(1)