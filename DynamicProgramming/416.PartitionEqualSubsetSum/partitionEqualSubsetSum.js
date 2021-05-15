const canPartition = (nums) => {
  let totalSum = 0;
  for (let num of nums) {
    totalSum += num;
  }
  if (totalSum % 2 !== 0) return false;
  let subsetSum = totalSum / 2;
  let n = nums.length;
  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = [];
  }

  return dfs(nums, n-1, subsetSum, memo);
};

const dfs = (nums, n, subsetSum, memo) => {
  if (subsetSum === 0) return true;
  if (n === 0 || subsetSum < 0) return false;

  if (memo[n][subsetSum] !== undefined) return memo[n][subsetSum];
  let result = dfs(nums, n-1, subsetSum - nums[n-1], memo) || dfs(nums, n-1, subsetSum, memo);
  memo[n][subsetSum] = result;
  return result;
};
