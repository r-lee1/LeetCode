const maxSubArray = (nums) => {
   let currentSubarraySum = nums[0];
   let maxSubarraySum = nums[0];

   for (let i = 1; i < nums.length; i++) {
       currentSubarraySum += nums[i];
       if (currentSubarraySum < nums[i]) currentSubarraySum = nums[i];
       maxSubarraySum = Math.max(maxSubarraySum, currentSubarraySum);
   }

   return maxSubarraySum;
};

/*
Kadane's Algorithm
1. Initialize a currentSubarraySum and a maxSubarraySum to the first element
2. Loop through nums, starting from element at index 1
   - Add nums[i] to currentSubarraySum
   - If new currentSubarraySum is less than nums[i], then discard the previous elements and start currentSubarraySum over at nums[i]
   - If currentSubarraySum is greater than maxSubarraySum, then update it
3. Return maxSubarraySum

Time: O(N)
Space: O(1)
*/

// var maxSubArray = function(nums) {
//     let maxSum = -Infinity;
//
//    for (let i = 0; i < nums.length; i++) {
//        let sum = 0;
//        for (let j = i; j < nums.length; j++) {
//            sum += nums[j];
//            maxSum = Math.max(sum, maxSum);
//        }
//    }
//
//     return maxSum;
// };
//
// /*
// Time: O(N^2)
// Space: O(1)
// */
