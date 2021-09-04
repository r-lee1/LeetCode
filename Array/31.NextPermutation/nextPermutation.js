/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) return nums;
    let pivot = null;

    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            pivot = i;
            break;
        }
    }

    if (pivot === null) return nums.reverse();

    for (let j = nums.length - 1; j > pivot; j--) {
        if (nums[j] > nums[pivot]) {
            [nums[j], nums[pivot]] = [nums[pivot], nums[j]];
            break;
        }
    }

    let i = pivot+1;
    let j = nums.length - 1;

    while(i < j) {
       [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};

//Time: O(N), Space: O(1)
/*
Assumption:
- If nums is in desc order then it doesn't have a next lexicographically larger permutation, so return the reverse of nums
- The more to the left the number is in the arr, the greater effect it has on making the permutation lexicographically larger, so we want to start from the right-end to find the smallest lexicographically larger permutation
    - Iterate the arr from the right, to find the pivot point where nums[i] < nums[i+1]
    - We need to find the next value larger than nums[i] on its right and swap the two numbers
    - After swapping, we know the values to the right of the pivot is still in desc order. We want to reverse this into asc order to get the smallest permutation possible
- Return the result
*/