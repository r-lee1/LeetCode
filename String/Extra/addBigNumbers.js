function addTwoLargeFloats(str1, str2) {
  // add digits using elementary mathematics way
  // get fractional and integer portions of each string

  let f1 = getFractional(str1, str1.indexOf('.'));
  let f2 = getFractional(str2, str2.indexOf('.'));
  let i1 = getInteger(str1, str1.indexOf('.'));
  let i2 = getInteger(str2, str2.indexOf('.'));

  // pad fractional and integer portions to be equal length
  let fDiff = Math.abs(f1.length - f2.length);
  if (f1.length < f2.length) {
    f1 = padFractional(f1, fDiff);
  } else if (f2.length < f1.length) {
    f2 = padFractional(f2, fDiff);
  }

  let iDiff = Math.abs(i1.length - i2.length);
  if (i1.length < i2.length) {
    i1 = padInteger(i1, iDiff);
  } else if (i2.length < i1.length) {
    i2 = padInteger(i2, iDiff);
  }


  // add string values together at each index, carry over to next index.
  // start with fractional and carry over to integer.
  let fracSum = '';
  let intSum = '';
  let carry = 0;
  for (let i = f1.length - 1; i > -1; i--) {
    let val = (JSON.parse(f1[i]) + JSON.parse(f2[i]) + carry);
    fracSum = (val % 10).toString() + fracSum;
    carry = Math.floor(val / 10);
  }

  for (let i = i1.length - 1; i > -1; i--) {
    let val = (JSON.parse(i1[i]) + JSON.parse(i2[i]) + carry);
    intSum = (val % 10).toString() + intSum;
    carry = Math.floor(val / 10);
  }

  if (carry > 0) {
    return carry.toString() + intSum + '.' + fracSum;
  } else {
    return intSum + '.' + fracSum;
  }

}

function getFractional(str, idx) {
  let substring = '';
  for(let i = idx + 1; i < str.length; i++) {
    substring += str[i];
  }
  return substring;
}

function getInteger(str, idx) {
  let substring = '';
  for (let i = idx - 1; i > -1; i--) {
    substring = str[i] + substring;
  }
  return substring;
}

function padFractional(str, diff) {
  let i = 0;
  while (i < diff) {
    str += '0';
    i++;
  }

  return str;
}

function padInteger(str, diff) {
  let i = 0;
  while (i < diff) {
    str = '0' + str;
    i++;
  }

  return str;
}

// Test
let str1 = '3.14';
let str2 = '12.345';

console.log(`expected: 15.485, result: ${addTwoLargeFloats(str1, str2)}
test passed: ${addTwoLargeFloats(str1, str2) === '15.485'}`);

str1 = '584506134.87368350839565308';
str2 = '30598657.0330473560587475634983';

console.log(`expected: 615104791.9067308644544006434983, result: ${addTwoLargeFloats(str1, str2)}
test passed: ${addTwoLargeFloats(str1, str2) === '615104791.9067308644544006434983'}`);
