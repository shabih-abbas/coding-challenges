"""
FCC Daily Challenge 12/08/2025
Problem: Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
"""

import re

def generate_num_regex(base):
    if base < 1 or base > 36:
        raise ValueError("invalid base")

    regex = r"[0-" + (str(base-1) if base <=10 else "9a-"+chr((base-10)+96)) + "]+"
    return re.compile(regex,re.IGNORECASE)

def is_valid_number(n, base):
    pattern = generate_num_regex(base)
    return bool(re.fullmatch(pattern,str(n)))

if __name__ == "__main__":
    assert is_valid_number("10101", 2) == True
    assert is_valid_number("76543210", 8) == True
    assert is_valid_number("5G3F8F", 17) == True
