""" 
FCC Daily Challenge 11/08/2025
Problem: Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
"""
import re
import math

def vowel_count(s):
  return len(re.findall(r"[aeiou]",s.lower()))

def is_balanced(s):
  return vowel_count(s[:math.floor(len(s)/2)])==vowel_count(s[math.ceil(len(s)/2):])

if __name__ == "__main__":
  assert is_balanced("Lorem Ipsum") == True 
  assert is_balanced("abcdefghijklmnopqrstuvwxyz") == False 
  assert is_balanced("123A#b!E&#x26;*456-o.U") == True
