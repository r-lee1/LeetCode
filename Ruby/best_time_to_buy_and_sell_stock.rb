# Say you have an array for which the ith element is the price of a given stock on day i.
#
# If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
#
# Note that you cannot sell a stock before you buy one.
#
# Example 1:
#
# Input: [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
#              Not 7-1 = 6, as selling price needs to be larger than buying price.
# Example 2:
#
# Input: [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transaction is done, i.e. max profit = 0.

# def max_profit(prices)
#   return 0 if prices.length <= 1
#
#   max_profit = 0
#   prices.each_with_index do |buy, idx|
#     (prices[idx + 1..-1]).each do |sell|
#       profit = sell - buy
#       if profit > max_profit
#         max_profit = profit
#       end
#     end
#   end
#   max_profit
# end

# Time Complexity: O(n^2)
# Space Complexity: O(1)

def max_profit(prices)
  return 0 if prices.length <= 1
  min_price = prices[0]
  max_profit = 0

  prices[1..-1].each do |price|
    if price < min_price
      min_price = price
    else
      profit = price - min_price

      if profit > max_profit
        max_profit = profit
      end
    end
  end

  max_profit
end

# Time Complexity: O(n)
# Space Complexity: O(1)
