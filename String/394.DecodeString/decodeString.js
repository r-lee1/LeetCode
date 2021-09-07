/**
 * @param {string} s
 * @return {string}
 */

// Using stack 
var decodeString = function(s) {
    const stack = [];

    for (let el of s) {
        if (el !== ']') {
            stack.push(el);
        } else {
            let curr = stack.pop();
            let substr = "";
            while (curr !== '[') {
                substr += curr;
                curr = stack.pop();
            }

            // Get k
            curr = stack.pop();
            let k = "";

            while (Number.isInteger(parseInt(curr))) {
                 k = curr + k;
                 curr = stack.pop();
            }

            stack.push(curr); // Need to push curr back into stack because it is an extra el that was popped off
            k = parseInt(k);

            while (k > 0) {
                for (let i = substr.length - 1; i >= 0; i--) {
                    stack.push(substr[i]);
                }
                k--;
            }
        }
    }

    return stack.join("");
};

// Time: O(maxK^countK * n) - maxK is the maximum value of k, countK is the count of nested k values, n is the max length of encoded string
// Space: O(sum(maxK^countK * n))
// 1. Create a stack
// 2. Traverse s
    // 3. Push each element into the stack
    // 4. If the element is a ']', start popping off from the stack
        // 5. Keep popping elements off the stack until '[', add these character elements into the decodedString.
        // 7. The element at top of the stack is an integer, this is the k times decodedString will be multiplied by, pop it.
            // Push the decodedString back to the stack in reverse order k times
    // 8. Continue from step 2
// 3. Return the stack as a string