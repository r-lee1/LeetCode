/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if (s.length === 0) {
        return true;
    }

    const openBracketStack = [];

    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char === '(' || char === '{' || char === '[') {
            openBracketStack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            const matchingOpenBracket = openBracketStack.pop();
            if (matchingOpenBracket === '(' && char === ')') {
              continue;
            } else if (matchingOpenBracket === '{' && char === '}') {
              continue;
            } else if (matchingOpenBracket === '[' && char === ']') {
              continue;
            } else {
                return false;
            }
        }
    }

    if (openBracketStack.length > 0) {
        return false;
    }

    return true;
};
