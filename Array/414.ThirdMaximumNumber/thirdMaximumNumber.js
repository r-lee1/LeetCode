/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let currentMax = -Infinity;
    let maxSet = [];
    let times = 3;

    while (times > 0) {
        for (let i = 0; i < nums.length; i++) {
            if (!maxSet.includes(nums[i])) {
                currentMax = Math.max(currentMax, nums[i]);
            }
        }

        if (currentMax !== -Infinity) {
            maxSet.push(currentMax);
            currentMax = -Infinity;
        }

        times--;
    }

    if (maxSet.length < 3) return maxSet[0];
    else return maxSet[maxSet.length-1];

};

/*
Time: O(N)
Space: O(1)

Go through nums to get the currentMax, put this in a set as well, set it as max
Go through nums again to get the currentMax that is not in the set, put this in the set
Go through nums again to get the currentMax that is not in the set, put this in the set, this is the third max
If the set has less than three numbers, then return max
*/
