/**
 * @param {number[]} arr
 * @return {number[]}
 */

const replaceElements = (arr) => {
    let lastVal = -1;
    let biggest = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        biggest = Math.max(lastVal, biggest);
        lastVal = arr[i];
        arr[i] = biggest;
    }

    return arr;
};

/*
Time: O(N)
Space: O(1)
*/

// var replaceElements = function(arr) {
//     let biggest = -1;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr.length - 1; j > i; j--) {
//             biggest = Math.max(arr[j], biggest);
//         }
//         arr[i] = biggest;
//         biggest = -1;
//     }
//     return arr;
// };

// /*
// Time: O(NM)
// Space: O(1)
// */
