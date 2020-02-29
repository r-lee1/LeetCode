/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //Split the nums integer range into halves, lower and upper ranges. 1..n/2 and n/2 + 1..n
    //Count the number of elements that fall into the lower range
    //If the count of elements that fall into the lower range is greater than the possible distinct integers
    //in the lower range, then the duplicate is in that half
    //Repeat the process in the lower range
    //Else repeat the process in the upper range
    //Eventually only one integer will be left, that is the duplicate

    let floor = 1;
    let ceiling = nums.length - 1;

    while (floor < ceiling) {
        const midpoint = Math.floor((ceiling + floor) / 2);
        const lowerRangeFloor = floor;
        const lowerRangeCeiling = midpoint;
        const upperRangeFloor = midpoint + 1;
        const upperRangeCeiling = ceiling;

        const distinctIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
        let itemsInLowerRange = 0;

        nums.forEach(item => {
            if (item <= lowerRangeCeiling && item >= lowerRangeFloor) {
                itemsInLowerRange += 1;
            }
        });

        if (itemsInLowerRange > distinctIntegersInLowerRange) {
            ceiling = lowerRangeCeiling;
        } else {
            floor = upperRangeFloor;
        }
    }

    return floor;
};
