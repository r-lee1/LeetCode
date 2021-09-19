/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const n = candidates.length;

    const dfs = (combination, sum, start) => {
        if (sum > target) return;
        if (sum === target) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < n; i++) {
            combination.push(candidates[i]);
            dfs(combination, sum + candidates[i], i);
            combination.pop();
        }
    };

    dfs([],0,0);
    return result;
};

/*
Time: O(N^(T/M + 1)) - N: total number of candidates, N-ary tree, T: target value, M: min val among candidates,                          T/M : max depth of the tree
Space: O(T/M) - number of recursive calls, we keep adding the smallest element to the combination

1. Keep track of valid unique combinations as result.
2. Recursively, add up combinations of every candidate until the target is reached or the sum is larger than the target.
3. In the next call, do not look back at the previous candidates.
4. When target is reached add it to the result.
*/