/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestBuy = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowestBuy) {
            lowestBuy = prices[i];
        } else {
            max = Math.max(max, prices[i] - lowestBuy);
        }
    }
    return max;
};

// Time: O(N), Space: O(1)