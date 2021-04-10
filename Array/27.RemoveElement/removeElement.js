/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            nums[i] = nums[length - 1];
            length--;
            i--;
        }
    }

    return length;
};

/*
Time: O(N)
Space: O(1)
*/

// const removeElement = (nums, val) => {
//     let i = 0;

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nums[i] = nums[j];
//             i++;
//         }
//     }

//     return i;
// }
// /*
// Time: O(N)
// Space: O(1)
// */

// var removeElement = function(nums, val) {
//     let length = nums.length;
//     for (let i = 0; i < length; i++) {
//         if (nums[i] === val) {
//             for (let j = i+1; j < length; j++) {
//                 nums[j-1] = nums[j];
//             }
//             length--;
//             i--;
//         }
//     }
//     return length;
// };

// /*
// Time: O(N^2)
// Space: O (1)
// */
