/**
 * @param {number[]} nums
 * @return {number[]}
 */


const findDisappearedNumbers = (nums) => {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) nums[num -1] = nums[num - 1] * -1;
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) result.push(j+1);
    }

    return result;
};

/*
Time: O(N)
Space: O(1)
*/


// var findDisappearedNumbers = function(nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         let temp;
//         while (nums[i] !== i+1 && nums[i] !== nums[nums[i] - 1]) {
//             temp = nums[nums[i] - 1];
//             nums[nums[i] - 1] = nums[i];
//             nums[i] = temp;
//         }
//     }

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== j+1) {
//             result.push(j+1);
//         }
//     }

//     return result;
// };

// /*
// Time: O(N)
// Space: O(1)

// - Go through array
// - If the element !== idx + 1, then swap with element in the appropriate index
//     - Continue until the element at the current index is equal to the element to swap with
// - Go through array again and if an element !== idx + 1 then add the missing element(idx + 1) to the results array.
// */
