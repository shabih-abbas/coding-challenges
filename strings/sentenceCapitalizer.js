/*
FCC Daily Challenge 16/09/2025
Problem: Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.
- All other characters should be preserved.
- Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!)
*/

function capitalize(paragraph) {
  var senTermins = ['?', '.', '!']
  var potentialNewSen = true;
  for(let i=0; i < paragraph.length; i++){
    if(paragraph[i] != ' '){
      if(senTermins.includes(paragraph[i]))
        potentialNewSen = true
      else if(potentialNewSen) {
        paragraph = paragraph.slice(0, i) + paragraph[i].toUpperCase() + paragraph.slice(i + 1)
        potentialNewSen = false
      }
    }
  }
  return paragraph;
}

//tests
console.log(
  capitalize("hello world. how are you?") ==
  "Hello world. How are you?"
)
console.log(
  capitalize("crazy!!!strange???unconventional...sentences.") ==
  "Crazy!!!Strange???Unconventional...Sentences."
)
console.log(
  capitalize("there's a space before this period . why is there a space before that period ?") ==
  "There's a space before this period . Why is there a space before that period ?"
)
