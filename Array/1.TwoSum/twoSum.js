/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let h = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let match = target - num;
        if (h[match] >= 0 && h[match] !== i) return [i, h[match]];
        h[num] = i;
    }
};

/*
Time: O(N)
Space: O(N)

- Create a hash table to store the element in nums as key and the index as value
- Iterate through nums and for nums[i], check if its complement (target - nums[i]) exists in the hash table
    - If it does, return [i, h[complement]]
    - Insert nums[i] into the hash table

*/
