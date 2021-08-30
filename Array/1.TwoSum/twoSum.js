/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numMap = {}; //{2:0,}
  for (let i = 0; i < nums.length; i++) {
      let match = target - nums[i];
      if (numMap[match] !== undefined) return [i, numMap[match]];
      else numMap[nums[i]] = i;
  }
};
// Time: O(N), Space: O(N)

/*
- Create a hash table to store the element in nums as key and the index as value
- Iterate through nums and for nums[i], check if its complement (target - nums[i]) exists in the hash table
    - If it does, return [i, h[complement]]
    - Insert nums[i] into the hash table

*/

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//       for (let j = i+1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) return [i, j];
//       }
//   }
// };
// Time: O(N^2), Space: O(1)
