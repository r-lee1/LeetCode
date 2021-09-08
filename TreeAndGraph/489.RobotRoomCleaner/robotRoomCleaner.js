/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    // top, right, bottom, left
    const directions = [[-1,0], [0,1], [1,0], [0,-1]];

    // Move robot back to its previous space and direction it was facing
    const goBack = () => {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    };

    const visited = new Set();
    dfs([0,0],0);

    function dfs(coord, d) {
        let [x,y] = coord;
        robot.clean();
        visited.add(coord.join());
        for (let i = 0; i < 4; i++) {
            let newD = (d + i) % 4;
            let newCoord = [];
            newCoord[0] = coord[0] + directions[newD][0];
            newCoord[1] = coord[1] + directions[newD][1];

            if (!visited.has(newCoord.join()) && robot.move()) {
                dfs(newCoord, newD);
                goBack();
            }
            robot.turnRight();
        }
    }
};

// Time: O(N-M) - N is the number of cells in the room and M is the number of obstacles
// Space: O(N-M) - visited set

// 1. Set direction the robot can travel in from a space
// 2. Create visited set
// 3. Perform dfs from the origin coordinate
    // - Robot cleans square
    // - Do this for all 4 directions: top, right, bottom, left
    // - Continue if the next space has not been seen and can be moved to
    // - If a move cannot be made in any direction, move the robot back to the previous space
// 4.




