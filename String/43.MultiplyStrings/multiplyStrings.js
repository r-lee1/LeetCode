/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const result = new Array(num1.length + num2.length).fill(0);

    for(let i = num1.length -1; i >= 0; i--) {
        for(let j = num2.length -1; j >= 0; j--) {

            const prevRemainder = result[i+j+1];
            const product = num1[i] * num2[j] + prevRemainder;
            const singleDigit = product % 10;
            const carryOver = Math.floor(product/10);

            result[i+j+1] = singleDigit;
            result[i+j] += carryOver;
        }
    }

    let k = 0;
    while(result[k] === 0) {
        result.shift();
    }

    return result.join('');
};
// Time: O(NM), Space: O(1);

// 1. Initiate array with necessary decimal places
// 2. Loop through num1 and num2 from the right side
// 3. Get the product of num1 * num2. Add the previous remainder (result[i+j+1])
// 4. Plug the single digits place into idx i+j+1
// 5. Add carryover in the next idx i+j
// 6. Remove all leading zeros
// 7. Return as string