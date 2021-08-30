/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var productExceptSelf = function(nums) {
     let suffix = 1;
     const answer = [];

     for (let i = 0; i < nums.length; i++) {
         if (i === 0) {
             answer[i] = 1;
         } else {
             answer[i] = answer[i-1] * nums[i-1];
         }
     }

     for (let j = nums.length - 1; j >= 0; j--) {
         if (j === nums.length - 1) {
             suffix = 1;
         } else {
             suffix = suffix * nums[j+1];
         }

         answer[j] = answer[j] * suffix;
     }

     return answer;
 };
 // Optimized solution with constant space
 // Use answer array as prefix array, then plug into answer[i] the product of answer[i] * suffix
 // Time: O(N), Space: O(1)

// var productExceptSelf = function(nums) {
//     const prefix = [];
//     const suffix = [];
//     const answer = [];
//
//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0) {
//             prefix[i] = 1;
//         } else {
//             prefix[i] = prefix[i-1] * nums[i-1];
//         }
//     }
//
//     for (let j = nums.length - 1; j >= 0; j--) {
//         if (j === nums.length - 1) {
//             suffix[j] = 1;
//         } else {
//             suffix[j] = suffix[j+1] * nums[j+1];
//         }
//     }
//
//     for (let k = 0; k < nums.length; k++) {
//         answer[k] = prefix[k] * suffix[k];
//     }
//
//     return answer;
// };
/*
Time: O(N), Space: O(N)

- Calculate prefix product of every num (prefix[i-1] * nums[i-1])
- Calculate suffix product of every num (suffix[i+1] * nums[i+1])
- Calculate product of prefix and suffix at every num to get the answer (prefix[i] * suffix[i])

*/