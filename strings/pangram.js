/*
FCC Daily Challenge 03/09/2025
Problem: Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.
Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.
*/

function isPangram(sentence, letters) {
  sentence = sentence.replace(/[\W\d]/g, "").toLowerCase();
  letters = letters.replace(/[\W\d]/g, "").toLowerCase();
  
  const regex = new RegExp("^["+letters+"]+$")
  const noOtherLetters = regex.test(sentence)
  const allLettersUsed = letters.split("").every(letter => sentence.includes(letter))
  
  return noOtherLetters && allLettersUsed;
}

//tests

console.log(isPangram("hello", "helo") == true)
console.log(isPangram("hello world", "helowrd") == true)
console.log(isPangram("Hello World!", "helowrd") == true)
console.log(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") == true)

console.log(isPangram("hello", "hel") == false)
console.log(isPangram("hello", "helow") == false)
console.log(isPangram("Hello World!", "heliowrd") == false)
console.log(isPangram("freeCodeCamp", "frcdmp") == false)
