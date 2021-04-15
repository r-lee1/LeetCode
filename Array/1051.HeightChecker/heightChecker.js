/**
 * @param {number[]} heights
 * @return {number}
 */

 const heightChecker = (heights) => {
     // Initiate tally to track possible height values, use index+1 to represent the height value
     let tally = new Array(100);
     let result = 0;

     // Track height values in the given heights array
     for (let height of heights) {
         if (!tally[height - 1]) {
             tally[height - 1] = 1;
         } else {
             tally[height - 1] += 1;
         }
     }

     let k = 0;

     // Go through the tally in ascending order, if heights[k] is not in the correct position it won't match index+1
     for (let i = 0; i < tally.length; i++) {
         while(tally[i]--) {
             if (i + 1 !== heights[k]) {
                 result++;
             }
             k++;
         }
     }

     return result;
 };

 /*
 Time: O(N)
 Space: O(1)
 */



// var heightChecker = function(heights) {
//     let count = 0;
//     let copy = [];
//
//     for (let el of heights) {
//         copy.push(el);
//     }
//
//     copy.sort((a,b) => a - b);
//
//     for (let i = 0; i < heights.length; i++) {
//         if (heights[i] !== copy[i]) count++;
//     }
//
//     return count;
// };

/*
Time: O(NlogN)
Space: O(N)
*/
