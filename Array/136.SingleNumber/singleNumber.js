/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    const numTracker = {};

    for (let i = 0; i < nums.length; i++) {
        if (numTracker[nums[i]]) {
            numTracker[nums[i]] += 1;
        } else {
            numTracker[nums[i]] = 1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (numTracker[nums[i]] === 1) {
            return nums[i];
        }
    }

};

// var singleNumber = function(nums) {
//     const numTracker = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         if (numTracker.has(nums[i])) {
//             numTracker.delete(nums[i]);
//         } else {
//             numTracker.add(nums[i]);
//         }
//     }

//  return numTracker.values().next().value;
// }
