/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Three Pointers (Start From the End)

const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let p = m + n - 1; p >= 0; p--) {
        if (p2 < 0) break;
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
    }
};

/*
Time: O(m+n)
Space: O(1)
*/

// Three Pointers (Start From the Beginning)

// const merge = (nums1, m, nums2, n) => {
//     const nums1Copy = [];
//     let p1 = 0;
//     let p2 = 0;

//     for (let i = 0; i < m; i++) {
//         nums1Copy.push(nums1[i]);
//     }

//     for (let j = 0; j < nums1.length; j++) {
//         if (p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2])) {
//             nums1[j] = nums1Copy[p1];
//             p1++;
//         } else {
//             nums1[j] = nums2[p2];
//             p2++;
//         }
//     }
// }

// /*
// Time: O(m+n)
// Space: O(m)
// */


// var merge = function(nums1, m, nums2, n) {
//     let j = 0;
//     for (let i = m; i < nums1.length; i++) {
//         nums1[i] = nums2[j];
//         j++;
//     }
//     nums1.sort((a,b) => a - b);
// };
