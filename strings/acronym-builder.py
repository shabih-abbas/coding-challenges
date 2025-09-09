"""
FCC Daily Challenge 08/09/2025
Problem: Given a string containing one or more words, return an acronym of the words using the following constraints:
- The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
- The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
- The acronym letters should be returned in order they are given.
- The acronym should not contain any spaces.
"""

import re

def build_acronym(s):
  acronym = ""
  words = s.split()
  ignore_pattern = re.compile(r"^(a|for|an|and|by|of)$")

  if len(words) > 0:
    acronym = words[0][0].upper()

    for word in words[1:]:
          
      if not bool(re.match(ignore_pattern, word)): acronym = acronym + word[0].upper() 

  return acronym

if __name__ == "__main__":
  assert build_acronym("Search Engine Optimization") == "SEO"
  assert build_acronym("For your information") == "FYI"
  assert build_acronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") == "AUHWPOTIMSH"
