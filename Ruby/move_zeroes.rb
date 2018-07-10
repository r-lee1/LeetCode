# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
#
# Example:
#
# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:
#
# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.


def move_zeroes(nums)
  current_idx = 0
  zeroes = []
  while current_idx < nums.length
    if nums[current_idx] == 0
      nums.slice!(current_idx, 1)
      zeroes << 0
    else
      current_idx += 1
    end
  end

  nums.concat(zeroes)
end
