/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charCounter = {};
    let maxLength = 0;
    let p = 0;
    let q = 0;

    while (q < s.length) {
        let char = s[q];
        if (charCounter[char] === undefined) {
            maxLength = Math.max(maxLength, q-p+1);
            charCounter[char] = 1;
            q++;
        } else if (charCounter[char] === 0) {
            maxLength = Math.max(maxLength, q-p+1);
            charCounter[char] += 1;
            q++;
        } else {
            while (charCounter[char] !== 0) {
                charCounter[s[p]] -= 1;
                p++;
            }

        }
    }

    return maxLength;
};

/*
- Have start and end pointer
- Have a counter for characters in current substring
- Go through string, if character has count of zero or undefined, move end pointer
    if the character has count of one, move start pointer
- Keep a maxLength and update it every time end pointer is incremented

Time: O(N)
Space: O(N)
*/