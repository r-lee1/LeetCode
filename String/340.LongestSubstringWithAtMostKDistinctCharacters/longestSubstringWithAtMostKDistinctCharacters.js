/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let left = 0;
    let right = 0;
    let maxLength = 0;

    const charMap = new Map();

    while (right < s.length) {
        let char = s[right];

        // Update map with last idx char is seen, which is the current idx.
        charMap.set(char, right);

        // The map size is the number of distinct characters in the window
        // If it is <= k then the window is valid. Update maxLength.
        // If it is > k, then a char needs to be removed by contracting the window.
        // The char least recently seen should be removed because that contracts the window the least.
        // Move left pointer to the idx after the smallest idx value in the map.
        if (charMap.size <= k) {
            maxLength = Math.max(right - left + 1, maxLength);
        } else {
            let smallestIdx = Math.min(...charMap.values());
            let leastRecentlySeenChar = s[smallestIdx];
            charMap.delete(leastRecentlySeenChar);
            left = smallestIdx+1;
        }
        right++;
    }

    return maxLength;
};
