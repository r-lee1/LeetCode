/*
Create a function that returns the sum of two floating numbers passed in as strings.
Do not convert the strings into numbers. Remember to remove leading and trailing zeros.
Account for both integer and floating numbers.

e.g.
Input: '3.14', '2.125'
Expected output: 5.265
*/

function addTwoBigFloats(s1, s2) {
  // split strings into float and integer portions
  let f1 = getFloat(s1);
  let f2 = getFloat(s2);

  // integer in reverse
  let i1 = getInteger(s1);
  let i2 = getInteger(s2);

  // pad the shorter numbers to have equal length for addition in correct position
  let fDiff = f1.length - f2.length;

  if (fDiff > 0) {
    f2 = padNum(f2, fDiff);
  } else if (fDiff < 0) {
    f1 = padNum(f1, Math.abs(fDiff));
  }

  let iDiff = i1.length - i2.length;

  if (iDiff > 0) {
    i2 = padNum(i2, iDiff);
  } else if (iDiff < 0) {
    i1 = padNum(i1, Math.abs(iDiff));
  }

  // add fractional portion, then add integer portion. account for carryovers

  let fResult = '';
  let fCarry = 0;
  for (let i = f1.length - 1; i > -1; i--) {
    let currSum = JSON.parse(f1[i]) + JSON.parse(f2[i]) + fCarry;
    fResult = (currSum % 10).toString() + fResult;
    fCarry = Math.floor(currSum / 10);
  }

  let iResult = '';
  let iCarry = fCarry;
  for (let i = 0; i < i1.length; i++) {
    let currSum = JSON.parse(i1[i]) + JSON.parse(i2[i]) + iCarry;
    iResult = iResult + (currSum % 10).toString();
    iCarry = Math.floor(currSum / 10);
  }

  if (f1 || f2) {
    if (iCarry) {
      return iCarry.toString() + iResult.split('').reverse().join('') + '.' + fResult;
    } else {
      return iResult.split('').reverse().join('') + '.' + fResult;
    }
  }

  if (iCarry) {
    return iCarry.toString() + iResult.split('').reverse().join('');
  } else {
    return iResult.split('').reverse().join('');
  }


}


function getFloat(string) {
  let decIdx = string.indexOf('.');
  let float = '';
  if (decIdx === -1) return float;

  for(let i = decIdx + 1; i < string.length; i++) {
    float += string[i];
  }

  return float;

}

function getInteger(string) {
  let decIdx = string.indexOf('.');
  if (decIdx === -1) return string.split('').reverse().join('');

  let integer = '';

  for (let i = decIdx - 1; i > -1; i--) {
    integer += string[i];
  }

  return integer;
}

function padNum(string, padding) {
  let result = string;

  for (let i = 0; i < padding; i++) {
    result += '0';
  }

  return result;
}

let str1 = '3.74';
let str2 = '12.345';

console.log(`expected: 16.085, result: ${addTwoBigFloats(str1, str2)}
test passed: ${addTwoBigFloats(str1, str2) === '16.085'}`);

str1 = '584506134.87368350839565308';
str2 = '30598657.0330473560587475634983';

console.log(`expected: 615104791.9067308644544006434983, result: ${addTwoBigFloats(str1, str2)}
test passed: ${addTwoBigFloats(str1, str2) === '615104791.9067308644544006434983'}`);

str1 = '123';
str2 = '123';
console.log(`expected: 246, result: ${addTwoBigFloats(str1, str2)}`);
