/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const n = nums.length;

    const dfs = (subset, start) => {
        result.push([...subset]);

        for (let i = start; i < n; i++) {
            subset.push(nums[i]);
            dfs(subset, i + 1);
            subset.pop();
        }
    };

    dfs([], 0);
    return result;
};

/*
Time: O(N x 2^N)
Space: O(N)

1. Keep result of subsets
2. Recursively, look at all subsets by looking at a number, then by adding another number to the subset
3. Don't look back at previously added element to avoid duplicate subsets
4. Add every subset to the result
5. Return result
*/