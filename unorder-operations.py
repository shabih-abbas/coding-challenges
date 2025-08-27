"""
FCC Daily Challenge 27/08/2025
Problem: Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. 
Repeat the operations as needed until all numbers are used. Return the final result.
"""

def evaluate(numbers, operators):
    
  if len(numbers)==0 or len(operators)==0:
    raise ValueError("invalid input")
  
  perform_operation = {
    "+" : lambda x,y : x + y,
    "-" : lambda x,y : x - y,
    "*" : lambda x,y : x * y,
    "/" : lambda x,y : x / y,
    "%" : lambda x,y : x % y
  }
  
  result = numbers[0]
  
  for i in range(1, len(numbers)):
    result = perform_operation[operators[(i-1) % len(operators)]](result, numbers[i])
  
  return result
  
  if __name__ == "__main__":
  
    assert evaluate([33, 11, 29, 13], ['/', '-']) == -2
    assert evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) == 30
    assert evaluate([5, 6, 7, 8, 9], ['+', '-']) == 3
