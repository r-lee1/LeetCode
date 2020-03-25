/**
 * @param {number[]} nums
 * @return {number}
 */
/*
- Set i as the pointer for non-duplication integers, starting at index 0
- Set j as the pointer for going through every element in the array
- If nums[i] !== nums[j], increment i and assign nums[j] to nums[i]
- The new length is i + 1
*/

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return ++i;
};
