/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";
    let res = "";

    const ones = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    };

    const lessThan20s = {
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen"
    };

     const tens = {
         2: "Twenty",
         3: "Thirty",
         4: "Forty",
         5: "Fifty",
         6: "Sixty",
         7: "Seventy",
         8: "Eighty",
         9: "Ninety"
     };

     const threeDigit = (num) => {
         let res = "";
         let hundred = Math.floor(num / 100);
         let ten = num - hundred * 100;

         if (hundred !== 0 && ten !== 0) {
             res = ones[hundred] + " Hundred " + twoDigit(ten);
         } else if (hundred === 0 && ten !== 0) {
             res = twoDigit(ten);
         } else if (hundred !== 0 && ten === 0) {
             res = ones[hundred] + " Hundred";
         }

         return res;
     };

     const twoDigit = (num) => {
         if (num < 10) return ones[num];
         if (num < 20) return lessThan20s[num];
         let ten = Math.floor(num / 10);
         let one = num - ten * 10;
         if (one !== 0) {
            return tens[ten] + " " + ones[one];
         } else {
             return tens[ten];
         }
     };

    let billion = Math.floor(num / 1000000000);
    let million = Math.floor((num - billion * 1000000000) / 1000000);
    let thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000);
    let hundred = num - billion * 1000000000 - million * 1000000 - thousand * 1000;

    if (billion !== 0) {
        res = threeDigit(billion) + " Billion";
    }
    if (million !== 0) {
        if (res !== "") res += " ";
        res += threeDigit(million) + " Million";
    }
    if (thousand !== 0) {
        if (res !== "") res += " ";
        res += threeDigit(thousand) + " Thousand";
    }
    if (hundred !== 0) {
        if (res !== "") res += " ";
        res += threeDigit(hundred);
    }

    return res;
};

/*
- The num can be split into every three digits
    - Then add Billions.. Millions.. etc. inbetween depending on the place in the num
- Create a dictionary to handle special wording
    - ones: 1-9
    - lessThan20s: 10-19
    - tens: 20-90
- Start from the billions, millions, thousands, then the rest and get the three digit value for each section
- To turn the three digit into English
    - Get the hundreds place
    - Handle cases for:
        - 0 at hundreds place,
        - tens place less than 20, less than 10
        - 0 in the tens place

*/
