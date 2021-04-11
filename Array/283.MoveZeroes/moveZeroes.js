/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = (nums) => {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
    }

    for (i; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/*
Time: O(N)
Space: O(1)
*/

// var moveZeroes = function(nums) {
//     let length = nums.length;

//     for (let i = nums.length -1 ; i >= 0; i--) {
//         if (nums[i] === 0) {
//             for (let j = i+1; j < length; j++) {
//                 let temp = nums[j];
//                 nums[j] = nums[j-1];
//                 nums[j-1] = temp;
//             }
//             length--;
//         }
//     }
// };

/*
Time: O(N^2)
Space: O(1)
*/
