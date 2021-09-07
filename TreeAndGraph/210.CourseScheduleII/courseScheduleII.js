/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
//

const findOrder = (numCourses, prerequisites) => {
    const graph = {};
    const stack = [];
    const visited = new Set();

    // Create adj list for graph
    for (let [a,b] of prerequisites) {
        if (graph[b] !== undefined) {
            graph[b].push(a);
        } else {
            graph[b] = [a];
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return [];
    }

    function dfs(v) {
        stack.push(v);
        let edges = graph[v];

        if (edges) {
            for (let e of edges) {
                // class already taken, skip
                if (visited.has(e)) continue;
                // cyclic exists, no valid path
                if (stack.indexOf(e) !== -1) return true;
                // exit traversal if a cycle is found
                if (dfs(e)) return true;
            }
        }

        stack.pop();
        visited.add(v);
        return false;
    }

    return [...visited].reverse();
};

// Time: O(V+E) - iterate through all vertices and edges
// Space: O(V+E) - E for edges in adj list, V for stack
// Topological sorted order problem - Directed acyclic graph
// 1. Create adj list for prereq
// 2. Go through all the nodes
// 3. Do dfs from a node that hasn't been visited before
    // 4. Keep a stack for resolved nodes
    // 5. Do dfs on all neighboring nodes that have not been visited
    // 6. Once resolved, push current node to the stack
// 4. Return resolved node stack in reverse order if length === numCourses or else a valid path doesn't exist return [].

//==================================

// Attempt #2 - can't figure out how to check for cycle
// const findOrder = (numCourses, prerequisites) => {
//     const adjList = {};

//     for (let i = 0; i < prerequisites.length; i++) {
//         const prereq = prerequisites[i];
//         if (adjList[prereq[1]] === undefined) {
//             adjList[prereq[1]] = [prereq[0]];
//         } else {
//             adjList[prereq[1]].push(prereq[0]);
//         }
//     }

//     const visited = [];
//     const seen = [];
//     const stack = [];

//     for (let i = 0; i < numCourses; i++) {
//         if (seen.indexOf(i) === -1) {
//             dfs(i);
//         }
//     }

//     return stack.length === numCourses ? stack.reverse() : [];

//     function dfs (node){
//         if (visited.indexOf(node) !== -1)
//         if (seen.indexOf(node) !== -1) return;

//         seen.push(node);

//         let neighbors = adjList[node];

//         if (neighbors) {
//             for (let i = 0; i < neighbors.length; i++) {
//                 dfs(neighbors[i]);
//             }
//         }
//         visited.push(node);
//         stack.push(node);
//     }
// }

// Attempt #1
// var findOrder = function(numCourses, prerequisites) {
//     const adjList = {};
//     // path = [];
//     // classesToTake = [];
//     // classesTaken = new Set();
//     const needPrereq = new Set();

//     //Get adj list for prereqs
//     for (let i = 0; i < prerequisites.length; i++) {
//         const prereq = prerequisites[i];
//         needPrereq.add(prereq[0]);
//         if (adjList[prereq[1]] === undefined) {
//             adjList[prereq[1]] = [prereq[0]];
//         } else {
//             adjList[prereq[1]].push(prereq[0]);
//         }
//     }

//     //Start from 0 and do BFS on the course path that can be taken
//     for (let i = 0; i < numCourses; i++) {
//         const path = [];
//         const classesToTake = [i];
//         const classesTaken = new Set();
//         while(classesToTake.length > 0) {
//             let curr = classesToTake.shift();
//             // if a class needs to be taken and it has already been taken, then this path is invalid.
//             if (classesTaken.has(curr)) break;
//             path.push(curr);
//             if (adjList[curr]) {
//                 for (let next of adjList[curr]) {
//                     if (!classesTaken.has(next)) {
//                         classesToTake.push(next);
//                     }
//                 }
//             }
//            if (path.length === numCourses) return path;
//         }
//     }

//     return [];
// };