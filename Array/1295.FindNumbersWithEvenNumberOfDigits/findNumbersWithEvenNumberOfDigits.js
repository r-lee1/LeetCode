/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenCount = 0;

    const isEvenDigit = (int) => {
        let digits = getDigits(int);
        if (digits % 2 === 0) return true;
        return false;
    };

    const getDigits = (int) => {
        let digits = 0;
        while (int !== 0) {
            int = Math.floor(int / 10);
            digits++;
        }
        return digits;
    };

    for (let num of nums) {
        if (isEvenDigit(num)) evenCount++;
    }

    return evenCount;
};

/*
Time: O(N);
Space: O(1);
*/
