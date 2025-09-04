/*
FCC Daily Challenge 04/09/2025
Problem: Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. 
For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.
*/

function repeatVowels(str) {
  if (typeof str == "string"){
    const regex = new RegExp("[aeiou]", "i")
    let strIndex = 0
    let vowelCount = 0
    let found = str.match(regex)
    
    while(strIndex < str.length && found){
      let vowel = found[0]
      vowel += vowel.toLowerCase().repeat(vowelCount)
      found.index += strIndex
      str = str.slice(0, found.index) + vowel + str.slice(found.index+1)
      vowelCount++
      strIndex = found.index + vowelCount 
      found = str.slice(strIndex).match(regex)
    }
  }
  return str;
}

//tests
console.log(
  repeatVowels("hello world") ==
  "helloo wooorld"
)
console.log(
  repeatVowels("AEIOU") == 
  "AEeIiiOoooUuuuu"
)
console.log(
  repeatVowels("I like eating ice cream in Iceland") ==
  "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"
)
