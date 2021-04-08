/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = (arr) => {
    let possibleDups = 0;
    let length = arr.length - 1;

    for (let i = 0; i <= length - possibleDups; i++) {
        if (arr[i] === 0) {
            if (i === length - possibleDups) {
                arr[length] = 0;
                length--;
                break;
            }
            possibleDups++;
        }
    }

    let copyEnd = length - possibleDups;
    for (let j = copyEnd; j >= 0; j--) {
        if (arr[j] === 0) {
            arr[j + possibleDups] = 0;
            possibleDups--;
            arr[j + possibleDups] = 0;
        } else {
            arr[j + possibleDups] = arr[j];
        }
    }
};


// var duplicateZeros = function(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === 0) {
//             for (let j = arr.length - 2; j >= i+1; j--) {
//                 arr[j+1] = arr[j];
//             }
//             arr[i+1] = 0;
//             i++;
//         }
//     }
// };

/*
Time: O(N^2)
Space: O(1)
*/
