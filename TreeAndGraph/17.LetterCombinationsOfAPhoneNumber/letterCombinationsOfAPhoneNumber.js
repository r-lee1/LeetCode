/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    };

    const result = [];

    const dfs = (digitIdx, substr) => {
        if (digitIdx === digits.length) {
            result.push(substr);
            return;
        }

        const digit = digits[digitIdx];

        for (let i = 0; i < map[digit].length; i++) {
            const char = map[digit][i];
                substr = substr.concat(char);
                dfs(digitIdx + 1, substr);
                substr = substr.slice(0,substr.length -1);
        }

    };

    dfs(0,'');

    return result;
};

/*

DFS

1. Map digits to the letters
2. Start from first digit and an empty string, go through all the letters possible
    a. For each letter add it to the empty string
    b. Recursively, go to the next digit in digits and pass the current string. Repeat steps a-b.
        - If there is no more digit, add the string to results and return.
    c. Remove the current letter from the string.
3. Return results

Time:
Space: O(N) - N is the length of digits, recursion stack, depth of backtracking
*/