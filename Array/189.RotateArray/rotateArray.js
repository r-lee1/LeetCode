/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {

    if (nums.length < 2) {
        return nums;
    }

    const rotatedArray = [];

    for(let i = 0; i < nums.length; i++) {
      let rotateToIndex = i + k;

      if (rotateToIndex >= nums.length) {
          rotateToIndex = rotateToIndex % nums.length;
      }

      rotatedArray[rotateToIndex] = nums[i];
    }

    return rotatedArray;
};
