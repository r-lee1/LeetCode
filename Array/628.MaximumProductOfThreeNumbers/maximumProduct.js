function maximumProduct(nums) {

  // Calculate the highest product of three numbers

  let countOfNegativeInt = 0;
  let negIntIndices = [];
  let largestInt,
  largestIntIdx,
  secondLargestInt,
  secondLargestIntIdx,
  thirdLargestInt,
  thirdLargestIntIdx;
  let lowestNegInt,
  lowestNegIntIdx,
  secondLowestNegInt,
  secondLowestNegIntIdx;

  //Get the largest integer
  for (let i = 0; i < nums.length; i++) {
    const currentInt = nums[i];
    if (!largestInt) {
      largestInt = currentInt;
      largestIntIdx = i;
    } else if (currentInt > largestInt) {
      largestInt = currentInt;
      largestIntIdx = i;
    }

  //Get count of integers that are negative in the array.
    if (currentInt < 0) {
      countOfNegativeInt += 1;
      negIntIndices.push(i);
    }
  }

  //Get the two lowest negative integers, if there are at least 2 negative integers
  if (negIntIndices.length >= 2) {
    for (let i = 0; i < negIntIndices.length; i++) {
      const currentInt = nums[negIntIndices[i]];
      if (!lowestNegInt) {
        lowestNegInt = currentInt;
        lowestNegIntIdx = i;
      } else if (currentInt < lowestNegInt) {
        lowestNegInt = currentInt;
        lowestNegIntIdx = i;
      }
    }

    for (let i = 0; i < negIntIndices.length; i++) {
      const currentInt = nums[negIntIndices[i]];
      if (!secondLowestNegInt && i !== lowestNegIntIdx) {
        secondLowestNegInt = currentInt;
        secondLowestNegIntIdx = i;
      } else if (currentInt < secondLowestNegInt && i !== lowestNegIntIdx) {
        secondLowestNegInt = currentInt;
        secondLowestNegIntIdx = i;
      }
    }
  }

  //Get the second and third largest integer
  for (let i = 0; i < nums.length; i++) {
    const currentInt = nums[i];
    if (!secondLargestInt && i !== largestIntIdx) {
      secondLargestInt = currentInt;
      secondLargestIntIdx = i;
    } else if (currentInt >= secondLargestInt && i !== largestIntIdx) {
      secondLargestInt = currentInt;
      secondLargestIntIdx = i;
    }
  }

    for (let i = 0; i < nums.length; i++) {
    const currentInt = nums[i];
    if (!thirdLargestInt && i !== largestIntIdx && i !== secondLargestIntIdx) {
      thirdLargestInt = currentInt;
      thirdLargestIntIdx = i;
    } else if (currentInt >= thirdLargestInt && i !== largestIntIdx && i !== secondLargestIntIdx) {
      thirdLargestInt = currentInt;
      thirdLargestIntIdx = i;
    }
  }

  //If there are two negative integers, check whether the product of these integers are greater
  //or smaller than product of the second and third largest integers. If the product of the
  //negative integers are greater, then return the product of that and the largest integer.
  //If the product of the second and third largest integer is greater, then return the product
  //of that and the largest integer.

  if (lowestNegInt * secondLowestNegInt > secondLargestInt * thirdLargestInt) {
    return largestInt * lowestNegInt * secondLowestNegInt;
  } else {
    return largestInt * secondLargestInt * thirdLargestInt;
  }
}
