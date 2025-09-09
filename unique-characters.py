"""
FCC Daily Challenge 09/09/2025
Problem: Given a string, determine if all the characters in the string are unique. Uppercase and lowercase letters should be considered different characters.
"""

def all_unique(s): return len(s) == len(set(s))

if __name__ == "__main__":
  assert all_unique("QwErTy123!@") == True
  assert all_unique("aA") == True

  assert all_unique("!@#*$%^&*()aA") == False
  assert all_unique("hello") == False
