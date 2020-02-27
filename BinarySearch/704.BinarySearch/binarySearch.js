/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let floorIndex = -1;
    let ceilingIndex = nums.length;

    while (floorIndex + 1 < ceilingIndex) {

        let distance = ceilingIndex - floorIndex;
        let halfDistance = Math.floor(distance / 2);
        let guessIndex = floorIndex + halfDistance;

        if (nums[guessIndex] === target) {
            return guessIndex;
        } else if (nums[guessIndex] > target) {
            ceilingIndex = guessIndex;
        } else if (nums[guessIndex] < target) {
            floorIndex = guessIndex;
        }

    }

    return -1;
};
