"""
FCC Daily Challenge 31/08/2025
Problem: Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.
- The function should handle "red", "green", or "blue" as an input argument.
- If the input is not one of those, the function should return "Invalid color".
- The function should return a random six-character hex color code where the input color value is greater than any of the others.
"""

import random

def generate_hexpart(lower_bound, upper_bound):
  if lower_bound < 0 or upper_bound > 256 : raise ValueError("invalid input")
  return random.randint(lower_bound, upper_bound -1)

def generate_2_digit_hex(num):
  if num < 0 or num > 256 : raise ValueError("invalid input")
  hex = format(num, "X")
  return (str(0) if len(hex) < 2 else "") + hex

def generate_hex(color):
  color_parts = {
    "red" : 0,
    "green" : 0,
    "blue" : 0
  }

  if color in color_parts:
    color_parts[color] = generate_hexpart(1, 256)
    for color_part in color_parts:
      if color_part != color:
        color_parts[color_part] = generate_hexpart(0, color_parts[color])
  
  else : return "Invalid color"
  
  red = generate_2_digit_hex(color_parts["red"])
  green = generate_2_digit_hex(color_parts["green"])
  blue = generate_2_digit_hex(color_parts["blue"])

  return red + green + blue
  
if __name__ == "__main__" :
  assert generate_hex("yellow") == "Invalid color"
  assert len(generate_hex("red")) == 6
  assert len(generate_hex("green")) == 6
  assert len(generate_hex("blue")) == 6

