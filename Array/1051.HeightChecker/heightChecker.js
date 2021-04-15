/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let copy = [];

    for (let el of heights) {
        copy.push(el);
    }

    copy.sort((a,b) => a - b);

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== copy[i]) count++;
    }

    return count;
};

/*
Time: O(NlogN)
Space: O(N)
*/
