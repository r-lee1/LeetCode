/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
-Given a target, find it in the rotated sorted array, return the index
-Assume no duplicates exists in the array
[4,5,6,7,0,1,2] , 1

Solution
1. Use binary search
    a. Find midpoint value
    b. Check which side is ordered properly (floorIndex value < midIndex value || midIndex value < ceilingIndex value)
        - Search the properly ordered side, if target falls between the floorIndex and ceilingIndex
        - If not, search the other side

*/

var search = function(nums, target) {

    let floorIndex = 0;
    let ceilingIndex = nums.length - 1; //1

    while (floorIndex <= ceilingIndex) {

        let midIndex = Math.floor((floorIndex + ceilingIndex) / 2); //0

        if (nums[midIndex] === target) {
            return midIndex;
        } else if (nums[floorIndex] <= nums[midIndex]) {
            if (nums[floorIndex] <= target && target < nums[midIndex]) {
                ceilingIndex = midIndex - 1;
            } else {
               floorIndex = midIndex + 1;
            }
        } else if (nums[midIndex] < nums[ceilingIndex]) {
            if (nums[midIndex] < target && target <= nums[ceilingIndex]) {
                floorIndex = midIndex + 1;
            } else {
                ceilingIndex = midIndex - 1;
            }
        }
    }

    return -1;
};
