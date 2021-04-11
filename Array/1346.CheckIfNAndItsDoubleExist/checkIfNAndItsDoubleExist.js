/**
 * @param {number[]} arr
 * @return {boolean}
 */

const checkIfExist = (arr) => {
    const h = {};
    for (let i = 0; i < arr.length; i++) {
        let currVal = arr[i];
        if (h[currVal * 2]) return true;
        if (currVal % 2 === 0 && h[currVal / 2]) return true;
        h[currVal] = true;
    }
    return false;
};

/*
Time: O(N)
Space: O(N)
*/


// const checkIfExist = (arr) => {
//     const h = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (h[arr[i]]) {
//             h[arr[i]].push(i);
//         } else {
//             h[arr[i]] = [i];
//         }
//     }

//     for (let j = 0; j < arr.length; j++) {
//         let val = 2 * arr[j];
//         if (h[val] !== undefined) {
//            if (h[val].filter(el => el !== j).length > 0) return true;
//         }
//     }

//     return false;
// };

// /*
// Time: O(N)
// Space: O(N)

// */

// var checkIfExist = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (j === i) continue;
//             if (arr[i] === arr[j] * 2) return true;
//         }
//     }

//     return false;
// };

// /*
// Time: O(N^2)
// Space:
// */
