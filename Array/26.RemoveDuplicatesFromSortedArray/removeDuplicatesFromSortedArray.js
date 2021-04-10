/**
 * @param {number[]} nums
 * @return {number}
 */
/*

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length;

    let p1 = 0;

    for (let p2 = 1; p2 < nums.length; p2++) {
        if (nums[p1] !== nums[p2]) {
            p1++;
            nums[p1] = nums[p2];
        }
    }

    return p1 + 1; // This is the length of the arr without duplicates
};

/*
Time: O(N)
Space: O(1)

If nums.length === 0 or 1, return nums.length
Let length = 1
If el at p1 === el at p2, move p2 forward
If el at p1 !== el at p2, length++, p1++, nums[p1] = nums[p2], p2++
Do this until p2 === nums.length
Return length
*/


// - Set i as the pointer for non-duplication integers, starting at index 0
// - Set j as the pointer for going through every element in the array
// - If nums[i] !== nums[j], increment i and assign nums[j] to nums[i]
// - The new length is i + 1
// */
//
// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//
//     return ++i;
// };
