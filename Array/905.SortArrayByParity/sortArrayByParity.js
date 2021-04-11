/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length - 1;

    while (i < j) {
        if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }

        if (A[i] % 2 === 0) i++;
        if (A[j] % 2 !== 0) j--;
    }

    return A;
};

/*
Time: O(N)
Space: O(1)
*/
