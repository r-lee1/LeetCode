/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;
    let valid = false;

    const makeJump = (idx) => {
        if (idx === nums.length - 1) {
            valid = true;
            return;
        }
        for (let i = 1; i <= nums[idx]; i++) {
            makeJump(idx+i);
        }
        return;
    };

    makeJump(0);
    return valid;
};

// This solution exceeds TLE
// Time: O(N!) - The worst case is running N, N-1, N-2...1 recursive steps. At each jump, the number of possible jumps decrease by one
// Space: O(N) - The worst case number of recursive calls is N. Making a jump of one step at each idx.
/*
- Try all possible jump sequences starting from the first index
- Repeat for the possible sequences for the following jumps
- Go through all possibilities until the end is reached
- If the end is never reached return false
*/