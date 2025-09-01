"""
FCC Daily Challenge 01/09/2025
Problem: Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, 
return an array containing the sequence of the given length inclusive of the starting sequence.
"""

def tribonacci_sequence(start_sequence, length):
  if length <= 0 : return []
  if length <= 3 : return start_sequence[:length]
  
  for i in range(0, length - 3):
    start_sequence.append(sum(start_sequence[i:]))
  
  return start_sequence

if __name__ == "__main__":
  assert tribonacci_sequence([0, 0, 1], 0) == []
  assert tribonacci_sequence([10, 20, 30], 2) == [10, 20]
  assert tribonacci_sequence([0, 0, 1], 20) == [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]
  assert tribonacci_sequence([123, 456, 789], 8) == [123, 456, 789, 1368, 2613, 4770, 8751, 16134]
