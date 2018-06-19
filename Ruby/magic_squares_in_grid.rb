# A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
#
# Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).
#
#
#
# Example 1:
#
# Input: [[4,3,8,4],
#         [9,5,1,9],
#         [2,7,6,2]]
# Output: 1
# Explanation:
# The following subgrid is a 3 x 3 magic square:
# 438
# 951
# 276
#
# while this one is not:
# 384
# 519
# 762
#
# In total, there is only one magic square inside the given grid.
# Note:
#
# 1 <= grid.length <= 10
# 1 <= grid[0].length <= 10
# 0 <= grid[i][j] <= 15

def num_magic_squares_inside(grid)
  num_of_magic_squares = 0

  if grid.length < 3 || grid[0].length < 3
    return num_of_magic_squares
  end

  (0..grid.length - 3).each do |x|
    (0..grid[0].length - 3).each do |y|
      sub_grid = []
      i = x
      3.times do
        row = []
        j = y
        3.times do
          row << grid[i][j]
          j += 1
        end
        sub_grid << row
        i += 1
      end
      if is_magic_square?(sub_grid)
        num_of_magic_squares += 1
      end
    end
  end

  num_of_magic_squares
end

def is_magic_square?(sub_grid)
  i = 0
  j = 0
  target = 0

  3.times do
    if sub_grid[i][j] > 9 || sub_grid[i][j] < 1
      return false
    end

    target += sub_grid[i][j]
    j += 1
  end

  diag1_total = sub_grid[0][0] + sub_grid[1][1] + sub_grid[2][2]
  diag2_total = sub_grid[0][2] + sub_grid[1][1] + sub_grid[2][0]

  if diag1_total != target || diag2_total != target
    return false
  end

  i = 1

  2.times do
    total = 0
    j = 0
    3.times do
      if sub_grid[i][j] > 9 || sub_grid[i][j] < 1
        return false
      end
      total += sub_grid[i][j]
      j += 1
    end
    if total != target
      return false
    end
    i += 1
  end
  true
end
