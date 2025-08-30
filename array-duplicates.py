"""
FCC Daily Challenge 30/08/2025
Problem: Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. 
If no values appear more than once, return an empty array.
"""

def find_duplicates(arr):
  dup_arr= []
  arr.sort()
  
  for i in range(1, len(arr)):
    if arr[i]==arr[i-1]:
      if len(dup_arr)==0 or dup_arr[-1] != arr[i]:
        dup_arr.append(arr[i])
  
  return dup_arr

if __name__ == "__main__":

  assert find_duplicates([1, 2, 3, 4, 5]) == []
  assert find_duplicates([1, 2, 3, 4, 1, 2]) == [1, 2]
  assert find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) == [-6, 0, 2, 4, 5, 23]
