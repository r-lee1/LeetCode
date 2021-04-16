const sortedSquares = (nums) => {
    let i = 0;
    let j = nums.length - 1;

    while (j > 0) {
      let temp;
      if (Math.abs(nums[i]) > Math.abs(nums[j])) {
        temp = nums[j];
        nums[j] = Math.pow(nums[i], 2);
        nums[i] = temp;
        j--;
      } else {
        nums[j] = Math.pow(nums[j], 2);
        j--;
      }
    }

    return nums;
};

/*
Time: O(N)
Space: O(1)
*/
