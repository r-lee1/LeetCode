/*
Create a function that returns the sum of two floating numbers passed in as strings.
Do not convert the strings into numbers

e.g.
Input: '3.14', '2.125'
Expected output: 5.265
*/

function addTwoBigFloats(s1, s2) {
  let f1 = getFractional(s1);
  let f2 = getFractional(s2);
  let fDiff = f1.length - f2.length;

  if (fDiff > 0) {
    f2 = padRight(f2, fDiff);
  } else if (fDiff < 0) {
    f1 = padRight(f1, Math.abs(fDiff));
  }

  // integer string is in reverse
  let i1 = getInteger(s1);
  let i2 = getInteger(s2);
  let iDiff = i1.length - i2.length;

  if (iDiff > 0) {
    i2 = padRight(i2, iDiff);
  } else if (iDiff < 0) {
    i1 = padRight(i1, Math.abs(iDiff));
  }
  // GOOD ^^^^

  // result is sum of integer strings + decimal + fractional strings
  f1 = f1.split('').reverse().join('');
  f2 = f2.split('').reverse().join('');

  return addStrings(i1, i2) + '.' + addStrings(f1, f2);

}

function getFractional(str) {
  let decIdx = str.indexOf('.');
  let result = '';

  for(let i = decIdx + 1; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

function getInteger(str) {
  let decIdx = str.indexOf('.');
  let result = '';

  for(let i = decIdx - 1; i > -1; i--) {
    result += str[i];
  }
  // result str is in reverse
  return result;
}

function padRight(str, num) {
  let paddingToAdd = num;
  let result = str;
  while (paddingToAdd > 0) {
    result += '0';
    paddingToAdd--;
  }

  return result;
}

function addStrings(str1, str2) {
  // strings have to be equal length and in reverse
  // result will be in an array

  let result = '';
  let carry = 0;
  for(let i = 0; i < str1.length; i++) {
    result += (JSON.parse(str1[i]) + JSON.parse(str2[i]) + carry) % 10;
    carry = Math.floor((JSON.parse(str1[i]) + JSON.parse(str2[i]) + carry) / 10);
  }
  if (carry) result += carry;

  //have to reverse result to get correct order
  return result.split('').reverse().join('');
}

// Test
let str1 = '3.14';
let str2 = '12.345';

console.log(`expected: 15.485, result: ${addTwoBigFloats(str1, str2)}
test passed: ${addTwoBigFloats(str1, str2) === '15.485'}`);

str1 = '584506134.87368350839565308';
str2 = '30598657.0330473560587475634983';

console.log(`expected: 615104791.9067308644544006434983, result: ${addTwoBigFloats(str1, str2)}
test passed: ${addTwoBigFloats(str1, str2) === '615104791.9067308644544006434983'}`);
