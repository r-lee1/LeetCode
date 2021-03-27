/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function(n) {
    const queenPlaced = {}; // {'0,0': true, }

    const placeQueen = (row, col, queenPlaced) => {
        queenPlaced[[row,col]] = true;
    };

    const backTrack = (row, count) => {
       if (row === n) {
           return ++count;
       }
      for (let col = 0; col < n; col++) {
          if (!isUnderAttack(n, queenPlaced, row, col)) {
              placeQueen(row, col, queenPlaced);
              count = backTrack(row+1, count);
              removeQueen(row,col,queenPlaced);
          }
      }
        return count;
    };

    /*
    row = 0, count = 0
        row = 1, count = 0
    */

    const removeQueen = (row, col, queenPlaced) => {
        delete queenPlaced[[row,col]];
    };

    const isUnderAttack = (n, queenPlaced, x, y) => {
        let queenCells = Object.keys(queenPlaced);
        for (let i = 0; i < queenCells.length; i++) {
            let qCoord = queenCells[i].split(',');
            let qX = JSON.parse(qCoord[0]);
            let qY = JSON.parse(qCoord[1]);

            if (x == qX || y == qY) return true;

            let k = 1;
            while (k <= qX && k <= qY) {
                if (x == qX-k && y == qY-k) return true;
                k++;
            }

            k = 1;
            while (k <= qX && k < n-qY) {
              if (x == qX-k && y == qY+k) return true;
              k++;
            }

            k = 1;
            while (k < n-qX && k <= qY) {
              if (x == qX+k && y == qY-k) return true;
              k++;
            }

            k = 1;
            while (k < n-qX && k < n-qY) {
              if (x == qX+k && y == qY+k) return true;
              k++;
            }

        }

        return false;
    };

    return backTrack(0,0);
};

// helper functions
// check if a cell is under attack, returns true if it is, returns false if it's not


/*
1. Go through all the rows
2. Go through cols of the current row
3. Place a queen in a cell that is not attacked and store it in placed queens.
4. If the end of the board is reached and n-queens have not been placed, remove that last placed queen and place it in another cell
5. If n-queens placed, then solution++
6. Check for more solutions until end of board is reached.
*/
