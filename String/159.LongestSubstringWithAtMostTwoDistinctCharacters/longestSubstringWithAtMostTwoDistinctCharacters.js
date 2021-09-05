/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s.length < 3) return s.length;
    let maxLength = 0;

    let left = 0;
    let right = 0;

    // Keep track of characters and the number of its occurence in the current window
    const charCounter = {};

    // Keep track of the number of distinct characters in the current window
    let distinctCharCount = 0;

    // Keep track of the distinct characters in the current window
    const distinctChars = new Set();

    while (right < s.length) {
        let char = s[right];

        // Update charCounter;
        if (charCounter[char] === undefined) {
            charCounter[char] = 1;
        } else {
            charCounter[char]++;
        }

        // If the current character is already in the set then no new distinct char is added
        // and the window is still valid. Update max substr length.
        if (distinctChars.has(char)) {
            maxLength = Math.max(maxLength, right - left + 1);

        } else {
            // If the current char is a new distinct char, add it to the set and count.
            distinctCharCount++;
            distinctChars.add(char);

            // If the distinct char count is still two or less then the window is still valid. Update               // max substr.
            if (distinctCharCount <= 2) {
                maxLength = Math.max(maxLength, right - left + 1);

            } else {
                // If distinct char count is over 2, then the window needs to contract
                // until a distinct char is removed. Determined by charCount reaching 0.
                // Decrement distinct char count and remove char from set.
                while (distinctCharCount > 2) {
                    let removeChar = s[left];
                    charCounter[removeChar]--;
                    if (charCounter[removeChar] === 0) {
                        distinctCharCount--;
                        distinctChars.delete(removeChar);
                    }
                    left++;
                }
            }
        }
        right++;
    }

    return maxLength;
};

//Time: O(N) - sliding window, at worst case going through string with right pointer once and left pointer once
// Space: O(1) - charCounter and distinctChars set with at most 3 elements