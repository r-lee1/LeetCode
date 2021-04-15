/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    let i = 0;
    let j = 0;
    let prevZeroIdx = 0;
    let foundZero = 0;
    let maxOnes = 1;

    while (j < nums.length) {
        if (nums[j] === 0) {
            if (foundZero > 0) {
                i = prevZeroIdx + 1;
                prevZeroIdx = j;
            } else {
                foundZero = 1;
                prevZeroIdx = j;
            }
        }

        maxOnes = Math.max(maxOnes, j - i + 1);
        j++;
    }

    return maxOnes;
};

/*
Time: O(N)
Space: O(1)

- Have two pointers to keep track of start and end of subarray
- Keep incrementing the end
    - Until there are two 0's in the subarray or gone through the entire array
    - In this case, get the length of the subarray, set maxLength to it if it's larger than existing maxLength
    - Move the start to index of last 0 + 1
*/
