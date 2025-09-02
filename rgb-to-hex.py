"""
FCC Daily Challenge 02/09/2025
Problem: Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent (# followed by six characters). Don't use any shorthand values.
"""

import re

def rgb_to_hex(rgb):
  if bool(re.match(r"^rgb\((\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$", rgb, re.IGNORECASE)):
    rgb_vals = re.findall(r"\d+", rgb)
    hex_color = "#"
    
    for val in rgb_vals:
      col_part = int(val)
      
      if col_part < 256:
          hex_code = format(col_part, "x")
          hex_code = ("0" if len(hex_code)<2 else "") + hex_code
          hex_color = hex_color + hex_code
      
      else: raise ValueError("Invalid input")
    
    return hex_color
  
  else: raise ValueError("Invalid input")

if __name__ == "__main__":
  assert rgb_to_hex("rgb(255, 255, 255)") == "#ffffff"
  assert rgb_to_hex("rgb(1, 11, 111)") == "#010b6f"
  assert rgb_to_hex("rgb(173, 216, 230)") == "#add8e6"
