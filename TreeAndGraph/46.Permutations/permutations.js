/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const dfs = (curr, permutation, visited) => {
        if (permutation.length === nums.length) {
            result.push([...permutation]);
            return;
        }

        for (let num of nums) {
            if (curr !== num && !visited.has(num)) {
                permutation.push(num);
                visited.add(num);
                dfs(num, permutation, visited);
                permutation.pop();
                visited.delete(num);
            }
        }
    };

    for (let num of nums) {
        const visited = new Set();
        visited.add(num);
        dfs(num, [num], visited);
    }

    return result;
};

/*
DFS/Backtracking

1. Keep result of permutations
2. Go through all integers in nums and do DFS/backtracking
    a. Keep a permutation array
    b. Keep a set of visited digits
    c. For each integer add it to the permutation array
    d. Recursively, try all the possible next integers that are valid
        - Valid if it is not the current integer and it has not been visited
    e. If permutation.length is the same as nums.length, all digits have been used and a permutation is found. Add to results
3. Return results

Time: O(N x N!) - Start with N with (N-1) options... (N-2)... etc. N * (N-1) * (N-2) = N!, then N work for each option
Space: O(N) - recursive stack
*/