/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const dfs = (combination, open, close) => {

        if (combination.length === n * 2) {
            result.push(combination);
            return;
        }

        if (open < n) {
            dfs(combination + '(', open + 1, close);
        }


        if (open > close) {
            dfs(combination + ')', open, close + 1);
        }
    };

    dfs('', 0, 0);
    return result;
};

/*
DFS Backtracking

1. Keep a collection of valid combinations as result
2. Keep count of open and close brackets
3. Do DFS traversal to find valid combinations, starting with '('
    a. At each step the next brack can be '(' or ')'
    b. If the next brack is valid add it to the combination and keep going
        - next '(', - it's valid if the number of open bracket is less than n
        - next ')' - it's valid if the number of open brackets is more than close brackets
    c. If it is not valid, backtrack
    d. Add the combination to result if its length is n * 2 - all parentheses are used in a well-formed way
4. Return result

???
Time: O(2^2N * N) - 2: number of branches, 2N: depth of recursion, N: for each sequence, need to validate the seq
Space: O(N) - worst case number of parentheses in combination N * 2, recursive callstack
???
*/