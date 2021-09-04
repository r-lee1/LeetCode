/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    for (let i = 0; i < Math.floor(n/2); i++) {
        for (let j = i; j < n - i - 1; j++) {
            // top to tmp
            let tmp = matrix[i][j];
            // left to top
            matrix[i][j] = matrix[n-j-1][i];
            // bottom to left
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            // right to bottom
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            // tmp to right
            matrix[j][n-i-1] = tmp;
        }
    }
};
// Time: O(N^2), Space: O(1)
/*
1. Rotate the numbers by groups of four
2. Going in a diagonal (i starts from 0...Math.floor(n/2)), start from (i,j), j starts at i, then traverse until the j bound (n-i-1)
3. For each selected starting top coordinate go through these steps:
    - Set temp to top
    - Move left to top
    - Move bottom to left
    - Move right to bottom
    - Move temp to right

    Coordinates for each section:
    top = matrix[i][j]
    left = matrix[n-j-1][i]
    bottom = matrix[n-i-1][n-j-1]
    right = matrix[j][n-i-1]
*/
