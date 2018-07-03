def shortest_to_char(s, c)
  shortest_distances = []
  idx_of_target_character = []

  s.each_char.each_with_index do |ch, idx|
    if ch == c
      idx_of_target_character << idx
    end
  end

  next_target_idx = 0

  s.each_char.each_with_index do |ch, current_idx|
    shortest_distances << (idx_of_target_character[next_target_idx] - current_idx).abs
    if ch == c && next_target_idx != idx_of_target_character.length - 1
      next_target_idx += 1
    end
  end

  prev_target_idx = idx_of_target_character.length - 1
  current_idx = s.length - 1

  while current_idx >= 0
    distance = (current_idx - idx_of_target_character[prev_target_idx]).abs
    if distance < shortest_distances[current_idx]
      shortest_distances[current_idx] = distance
    end

    if s[current_idx] == c && prev_target_idx != 0
      prev_target_idx -= 1
    end

    current_idx -= 1
  end

  shortest_distances
end
