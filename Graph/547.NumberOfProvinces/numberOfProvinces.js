/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Set();
    let count = 0;
    const stack = [];

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            stack.push(i);
            count++;
        }
        while(stack.length > 0) {
            let current = stack.pop();
            visited.add(current);
            for (let j = 0; j < isConnected[current].length; j++) {
                if (!visited.has(j) && isConnected[current][j] === 1) {
                    stack.push(j);
                }
            }
        }
    }

    return count;
};

/*
Time: O(N^2)
Space: O(N)
*/
