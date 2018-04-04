//Write a function to find the longest common prefix string amongst an array of strings.

const longestCommonPrefix = function(strs) {
    let longestLength = 0;
    let longestPrefix = "";

    console.log(strs);

    if (strs.length === 0) {
        return "";
    }

    for(let i = 0; i < strs[0].length; i++) {
        let temp = strs[0][i];
        let commonChar = true;

        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== temp) {
                commonChar = false;
            }
        }

        if (commonChar === true) {
            longestPrefix += temp;
        } else {
            break;
        }
    }

    return longestPrefix;
};
