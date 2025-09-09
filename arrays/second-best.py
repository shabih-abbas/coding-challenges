"""
FCC Daily Challenge 28/08/25
Problem: Given an array of integers representing the price of different laptops, and an integer representing your budget, return:
The second most expensive laptop if it is within your budget, or The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.
"""

def bs_eq_or_lt(within, val):
  if not len(within) : return -1
  m = len(within)//2
  if within[m] == val : return m
  if within[m] < val : return m + bs_eq_or_lt(within[m+1:], val) + 1
  else : return bs_eq_or_lt(within[:m], val)

def get_laptop_cost(laptops, budget):
  if not len(laptops): raise ValueError("invalid input")
  
  laptops.sort()
  
  if laptops[0] > budget: return 0
  
  if len(laptops) > 1:
    if laptops[-2] <= budget: return laptops[-2]
    return laptops[bs_eq_or_lt(laptops, budget)]
  
  return laptops[0]

if __name__ == "__main__":
  assert get_laptop_cost([2099, 1599, 1899, 1499], 1000) == 0
  assert get_laptop_cost([2099, 1599, 1899, 1499], 2200) == 1899
  assert get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450) == 1400
