/* Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
function generate(numRows) {
  const store = {
        0: [1],
        1: [1, 1]
    };
    let result = [];
    let i = 0;
    while(i < numRows) {
        if (store[i]) {
            result.push(store[i]);
        } else {
            let temp = [];
            for(let j=0; j <= i; j++) {
                if(j === 0 || j === i) {
                    temp.push(1);
                } else {
                    temp.push(store[i-1][j-1] + store[i-1][j]);
                }
            }
            store[i] = temp;
            result.push(temp);
        }
        i++;
    }
    return result;
}
