"""
FCC Daily Challenge 29/08/2025
Problem: Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, 
return the number of candles you will have used after creating and burning as many as you can.
"""

def burn_candles(candles, leftovers_needed):
  newCandles = candles // leftovers_needed
  leftovers = candles % leftovers_needed
 
  while(newCandles):
    candles = candles + newCandles
    leftovers = newCandles + leftovers
    newCandles = (leftovers) // leftovers_needed
    leftovers = leftovers % leftovers_needed

  return candles

if __name__ == "__main__":

  assert burn_candles(7, 2) == 13
  assert burn_candles(20, 3) == 29
  assert burn_candles(2345, 3) == 3517

