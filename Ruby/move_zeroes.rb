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
