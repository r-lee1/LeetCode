/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
    const bracketMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    const openBrackets = [];

    for (let bracket of s) {
        if (bracketMap[bracket]) {
            openBrackets.push(bracket);
        } else {
            if (bracketMap[openBrackets.pop()] !== bracket) {
                return false;
            }
        }
    }

    return openBrackets.length === 0 ? true : false;
};

// Time: O(N) - go through s once
// Space: O(N) - stack



// var isValid = function(s) {
//
//     if (s.length === 0) {
//         return true;
//     }
//
//     const openBracketStack = [];
//
//     for(let i = 0; i < s.length; i++) {
//         const char = s.charAt(i);
//         if (char === '(' || char === '{' || char === '[') {
//             openBracketStack.push(char);
//         } else if (char === ')' || char === '}' || char === ']') {
//             const matchingOpenBracket = openBracketStack.pop();
//             if (matchingOpenBracket === '(' && char === ')') {
//               continue;
//             } else if (matchingOpenBracket === '{' && char === '}') {
//               continue;
//             } else if (matchingOpenBracket === '[' && char === ']') {
//               continue;
//             } else {
//                 return false;
//             }
//         }
//     }
//
//     if (openBracketStack.length > 0) {
//         return false;
//     }
//
//     return true;
// };
