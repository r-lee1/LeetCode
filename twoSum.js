var twoSum = function(nums, target) {
    let possibleMatches = {};

    for(let i=0; i < nums.length; i++) {
        let match = target - nums[i];
        if (possibleMatches[match] !== undefined) {
            return [possibleMatches[match], i];
        } else {
            possibleMatches[nums[i]] = i;
        }
    }

};

twoSum([3, 3], 6);
