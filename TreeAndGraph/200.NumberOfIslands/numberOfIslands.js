/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

    const checkAdj = (i,j) => {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1 || grid[i][j] === '0') {
            return;
        } else {
            grid[i][j] = '0';
            checkAdj(i-1,j);
            checkAdj(i+1,j);
            checkAdj(i,j+1);
            checkAdj(i,j-1);
        }
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let space = grid[i][j];
            if (space === '1') {
                count++;
                checkAdj(i,j);
            }
        }
    }

    return count;
};

// Time: O(NM) - check every space, Space: O(NM) - recursive call for all space