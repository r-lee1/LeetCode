/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = (height) => {
    // 1. Initialize max to zero.
    let max = 0;

    // 2. Set left and right pointers, starting from the extremes of the array
    let left = 0;
    let right = height.length - 1;

    // 3. Set a while loop that loops while left < right
    while (left < right) {

        // 4. Calculate the currentArea and max
        let currentArea = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, currentArea);

        // 5. Decide whether to increment left or decrement right.
        // The smaller of the two should be moved because the smaller height is the limiting factor in area calculation
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    // 6. Return max.
    return max;
};
// Time: O(N), Space: O(1)





// Time: O(N^2) - exceed time limit
// var maxArea = function(height) {
//     let max = 0;
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = 1; j < height.length; j++) {
//             let area = Math.abs(i - j) * Math.min(height[i], height[j]);
//             max = Math.max(area, max);
//         }
//     }

//     return max;
// };

// area = x * y
// x: |line1x - line2x|, y: Math.min(line1y, line2y)
//