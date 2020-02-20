function maximumProduct(nums) {

  // Calculate the highest product of three numbers

  //Get the highest and lowest integer
   let maxInt = Math.max(nums[0], nums[1]);
   let minInt = Math.min(nums[0], nums[1]);

   //Get the highest and lowest product of 2 integers
   let maxProductOf2 = nums[0] * nums[1];
   let minProductOf2 = nums[0] * nums[1];

   //Get the highest product of 3 integers
   let maxProductOf3 = nums[0] * nums[1] * nums[2];

   for (let i = 2; i < nums.length; i++) {
       let currentInt = nums[i];

       //Update the maxProductOf3 when going over each integer in the array
       maxProductOf3 = Math.max(maxProductOf3,
                                currentInt * maxProductOf2,
                                currentInt * minProductOf2);
       //Update the max and min product of 2 integers when going over each integer in the array
       maxProductOf2 = Math.max(maxProductOf2,
                               currentInt * maxInt,
                               currentInt * minInt);
       minProductOf2 = Math.min(minProductOf2,
                               currentInt * maxInt,
                               currentInt * minInt);

       //Update the max and min integer when going over each integer in the array
       maxInt = Math.max(maxInt, currentInt);
       minInt = Math.min(minInt, currentInt);
   }

   return maxProductOf3;

  // let countOfNegativeInt = 0;
  // let negIntIndices = [];
  // let largestInt,
  // largestIntIdx,
  // secondLargestInt,
  // secondLargestIntIdx,
  // thirdLargestInt,
  // thirdLargestIntIdx;
  // let lowestNegInt,
  // lowestNegIntIdx,
  // secondLowestNegInt,
  // secondLowestNegIntIdx;
  //
  // //Get the largest integer
  // for (let i = 0; i < nums.length; i++) {
  //   const currentInt = nums[i];
  //   if (!largestInt) {
  //     largestInt = currentInt;
  //     largestIntIdx = i;
  //   } else if (currentInt > largestInt) {
  //     largestInt = currentInt;
  //     largestIntIdx = i;
  //   }
  //
  // //Get count of integers that are negative in the array.
  //   if (currentInt < 0) {
  //     countOfNegativeInt += 1;
  //     negIntIndices.push(i);
  //   }
  // }
  //
  // //Get the two lowest negative integers, if there are at least 2 negative integers
  // if (negIntIndices.length >= 2) {
  //   for (let i = 0; i < negIntIndices.length; i++) {
  //     const currentInt = nums[negIntIndices[i]];
  //     if (!lowestNegInt) {
  //       lowestNegInt = currentInt;
  //       lowestNegIntIdx = i;
  //     } else if (currentInt < lowestNegInt) {
  //       lowestNegInt = currentInt;
  //       lowestNegIntIdx = i;
  //     }
  //   }
  //
  //   for (let i = 0; i < negIntIndices.length; i++) {
  //     const currentInt = nums[negIntIndices[i]];
  //     if (!secondLowestNegInt && i !== lowestNegIntIdx) {
  //       secondLowestNegInt = currentInt;
  //       secondLowestNegIntIdx = i;
  //     } else if (currentInt < secondLowestNegInt && i !== lowestNegIntIdx) {
  //       secondLowestNegInt = currentInt;
  //       secondLowestNegIntIdx = i;
  //     }
  //   }
  // }
  //
  // //Get the second and third largest integer
  // for (let i = 0; i < nums.length; i++) {
  //   const currentInt = nums[i];
  //   if (!secondLargestInt && i !== largestIntIdx) {
  //     secondLargestInt = currentInt;
  //     secondLargestIntIdx = i;
  //   } else if (currentInt >= secondLargestInt && i !== largestIntIdx) {
  //     secondLargestInt = currentInt;
  //     secondLargestIntIdx = i;
  //   }
  // }
  //
  //   for (let i = 0; i < nums.length; i++) {
  //   const currentInt = nums[i];
  //   if (!thirdLargestInt && i !== largestIntIdx && i !== secondLargestIntIdx) {
  //     thirdLargestInt = currentInt;
  //     thirdLargestIntIdx = i;
  //   } else if (currentInt >= thirdLargestInt && i !== largestIntIdx && i !== secondLargestIntIdx) {
  //     thirdLargestInt = currentInt;
  //     thirdLargestIntIdx = i;
  //   }
  // }
  //
  // //If there are two negative integers, check whether the product of these integers are greater
  // //or smaller than product of the second and third largest integers. If the product of the
  // //negative integers are greater, then return the product of that and the largest integer.
  // //If the product of the second and third largest integer is greater, then return the product
  // //of that and the largest integer.
  //
  // if (lowestNegInt && secondLowestNegInt) {
  //   return Math.max((largestInt * lowestNegInt * secondLowestNegInt),
  //   (largestInt * secondLargestInt * thirdLargestInt));
  // } else {
  //   return largestInt * secondLargestInt * thirdLargestInt;
  // }
}
