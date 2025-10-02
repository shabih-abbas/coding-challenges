/*
Rosetta Code Project Challenge # 4
Problem: You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. 
A complete alphabet is guaranteed amongst all sides of the blocks. For the following collection of blocks:

(B O) (X K) (D Q) (C P) (N A) (G T) (R E) (T G) (Q D) (F S) (J W) (H U) (V I) (A N) (O B) (E R) (F S) (L Y) (P C) (Z M)

Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.
Rules: 
- Once a letter on a block is used, that block cannot be used again.
- The function should be case-insensitive.
*/

function canMakeWord(word) {
  var blocks = {
    "a": [5, 14],
    "b": [1, 15],
    "c": [4, 19],
    "d": [3, 9],
    "e": [7, 16],
    "f": [10, 17],
    "g": [6, 8],
    "h": [12],
    "i": [13],
    "j": [11],
    "k": [2],
    "l": [18],
    "m": [20],
    "n": [5, 14],
    "o": [1, 15],
    "p": [4, 19],
    "q": [3, 9],
    "r": [7, 16],
    "s": [10, 17],
    "t": [6, 8],
    "u": [12],
    "v": [13],
    "w": [11],
    "x": [2],
    "y": [18],
    "z": [20],
  }
  var used = []
  word = word.toLowerCase().split('')
  for (let letter of word) {
    let curBlock
    for (let block of blocks[letter]) {
      if (!used.includes(block)) curBlock = block
    }
    if (curBlock) used.push(curBlock)
    else return false
  }
  return true
}
//tests
console.log(canMakeWord("conFUSE") === true)
console.log(canMakeWord("BooK") === false)
