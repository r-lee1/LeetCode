var maxSubArray = function(nums) {
    let maxSum = -Infinity;

   for (let i = 0; i < nums.length; i++) {
       let sum = 0;
       for (let j = i; j < nums.length; j++) {
           sum += nums[j];
           maxSum = Math.max(sum, maxSum);
       }
   }

    return maxSum;
};

/*
Time: O(N^2)
Space: O(1)
*/
