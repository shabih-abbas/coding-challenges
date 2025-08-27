"""
FCC Daily Challenge 13/08/2025
Problem: Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, 
return an array containing the sequence of the given length inclusive of the starting numbers.
"""

def fibonacci_sequence(start_sequence, length):
    
  if len(start_sequence) != 2 or length < 0:
    raise ValueError("invalid inputs")
    
  if length<= 2:
    return start_sequence[:length]
    
  for _ in range(length-2):
    start_sequence.append(start_sequence[-2] + start_sequence[-1])
    
  return start_sequence

if __name__ == "__main__":
  
  assert fibonacci_sequence([0, 1], 20) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
  assert fibonacci_sequence([123456789, 987654321], 5) == [123456789, 987654321, 1111111110, 2098765431, 3209876541]
