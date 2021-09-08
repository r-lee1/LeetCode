/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    const answers = [];

    for (let i = 0; i < equations.length; i++) {
        let [a,b] = equations[i];
        // record edge a->b
        if (graph[a] !== undefined) {
            graph[a].push([b,values[i]]);
        } else {
            graph[a] = [[b,values[i]]];
        }
        // record edge b->a
        if (graph[b] !== undefined) {
            graph[b].push([a,1/values[i]]);
        } else {
            graph[b] = [[a,1/values[i]]];
        }
    }

    for (let i = 0; i < queries.length; i++) {
        let [c,d] = queries[i];
        let visited = new Set();
        let answer = dfs(c,d,1.0,visited);
        answer !== null ? answers.push(answer) : answers.push(-1.0);
    }

    function dfs(curr, end, res, visited) {
        // invalid node
        if (graph[curr] === undefined) return null;

        visited.add(curr);

        // found path to end
        if (curr === end) return res;

        let edges = graph[curr];
        if (edges) {
            for (let [v,w] of edges) {
                // if a neighbor hasn't been visited, keep searching
                if (!visited.has(v)) {
                    let product = dfs(v,end,res*w, visited);
                    // if a valid path is found, return the product of the edge weights
                    if (product) return product;
                }
            }
        }
        // no path found
        visited.delete(curr);
        return null;
    }
    return answers;
};

// Time: O(N) + O(MN) => O(MN) - N is number of equations, M is number of queries
// Space: O(N) + O(N) + O(N) => O(N)
// 1. Create a directed weighted graph from equations and values
// 2. Perform path finding from query variables C to D.
    // - The answer is the product of the edges from C to D.