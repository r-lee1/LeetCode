/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // Counter to keep count of the characters in t
    const targetCounter = {};
    for (let char of t) {
        if (targetCounter[char] === undefined) {
            targetCounter[char] = 1;
        } else {
            targetCounter[char]++;
        }
    }

    // Number of unique characters in t, which needs to be present in a valid window
    let requiredCount = Object.entries(targetCounter).length;

    // Set two pointers for sliding window
    let left = 0;
    let right = 0;

    // Number of characters in the window that meets the required character count for a valid window
    let metCount = 0;

    // Hashmap to keep count of characters in the current window
    const windowCounter = {};

    // List of valid windows found
    let minLength = s.length;
    const validWindows = [];

    while (right < s.length) {
        // If the character is one we are looking for then add the count to windowCounter
        let char = s[right];
        if (targetCounter[char]) {
            if (windowCounter[char] === undefined) {
                windowCounter[char] = 1;
            } else {
                windowCounter[char]++;
            }
        }
        // If the count of the character is the same as target counter,
        // we note that the condition for that character is met
        if (targetCounter[char] && targetCounter[char] === windowCounter[char]) {
            metCount++;
        }

        // Contract the window until it is no longer a valid window.
        // If the window length is less than the minLength, the keep track of the left and right idx in validWindows
        while (metCount === requiredCount) {

            const windowLength = right - left + 1;
            if (windowLength <= minLength) {
                validWindows.push([left, right]);
                minLength = windowLength;
            }
            let char = s[left];
            if (targetCounter[char]) {
                windowCounter[char]--;
                if (windowCounter[char] < targetCounter[char]) {
                    metCount--;
                }
            }
            left++;
        }

        // Continue expanding window until it is valid
        right++;
    }

    // The last entry in valid windows will be the minimum valid window or "" if no valid windows were found
    return validWindows.length ?
        s.slice(validWindows[validWindows.length -1][0], validWindows[validWindows.length -1][1] + 1) : "";
};

// Time: O(N + M) - Move right and left pointer in worst case N times. 2N -> N. M is for creating targetCounter from t
// Space: O(N + M) - N in worst case if every character in s is a valid window. M is for t having all unique characters