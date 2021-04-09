/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

 const duplicateZeros = (arr) => {
     let spaceToCreate = 0; // How many zeros to duplicate, how many elements to remove from the end
     let endOfCopy = arr.length - 1; // Everytime we have to create more space for a duplicate 0, we copy one less element to make space

     // Loop through the array until the end of the elements that need to be copied
     // to find how many zeros need to be duplicated, which helps us figure out how much extra space we need
     for (let i = 0; i <= endOfCopy; i++) {
         if (arr[i] === 0) {
             // If the zero is at the end of elements to copy then we know we copy it like a normal element without a duplicate 0
             // because there is not enough space for the duplicate
             if (i === endOfCopy) {
                 arr[arr.length-1] = 0;
                 endOfCopy--;
                 break;
             }
             spaceToCreate++;
             endOfCopy--;
         }
     }

     // Copy from the end of elements to copy to the beginning
     // We will copy the elements to the original array, starting from the end of the extra space created
     // if the element is 0 then copy it twice
     for (let j = endOfCopy; j >= 0; j--) {
         if (arr[j] === 0) {
             arr[j+spaceToCreate] = arr[j];
             spaceToCreate--;
             arr[j+spaceToCreate] = arr[j];
         } else {
             arr[j+spaceToCreate] = arr[j];
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
