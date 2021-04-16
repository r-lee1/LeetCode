/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counter = {};
    for (let char of s) {
        if (counter[char]) counter[char]++;
        else counter[char] = 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (counter[s[i]] === 1) return i;
    }

    return -1;
};

/*
Time: O(N)
Space: O(1)
*/
