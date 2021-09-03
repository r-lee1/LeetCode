/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a,b) => a-b);
    const result = [];
    let prevNum = null;

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === prevNum) continue;
        findPairSum(i);
        prevNum = nums[i];
    }

    function findPairSum (i) {
        let lo = i+1;
        let hi = nums.length - 1;
        let prevLo = null;

        while(lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (prevLo === nums[lo]) {
                lo++;
                continue;
            }
            if (sum === 0) {
                result.push([nums[i], nums[lo], nums[hi]]);
                prevLo = nums[lo++];
                hi--;
            } else if (sum < 0) {
                prevLo = nums[lo++];
            } else {
                hi--;
            }
        }
    }

    return result;
};


// Time: O(N^2 + NlogN(sort)) -> asymptotically O(N^2) Space: O(logN)(sort)
// 1. Sort Array
// 2. Set i as pivotal element, starting at index 0. Iterate through nums.
// If nums[i] === prevNum, skip it to avoid duplicates.
// 3. Set two pointers lo (i+1) and hi (nums.length - 1)
    // 4. Set a while loop to run while lo < high
    // If nums[lo] === prevLo, increment lo
    // 5. If nums[i] + nums[lo] + nums[high] === 0, add this triplet to the result. Increment lo, decrement hi.
    // 6. If the sum is less than 0, set prevLo as lo, increment lo. If the sum is greater, decrement hi
// 7. Set nums[i] as prevNum
// 8. Return result