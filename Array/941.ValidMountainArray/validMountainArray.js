/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 0;

    // Keep walking uphill until peak
    while(i < arr.length && arr[i] < arr[i+1]) i++;

    // The peak can't be at the beginning or the end
    if (i === 0 || i === arr.length - 1) return false;

    // Walk downhill until the end of the array
    while(i < arr.length && arr[i] > arr[i+1]) i++;

    // If the end is reached then it is a mountain array
    return i === arr.length - 1;
};

/*
Time: O(N)
Space: O(1)
*/
