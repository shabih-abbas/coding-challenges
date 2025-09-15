function getWords(paragraph) {
  paragraph = paragraph.toLowerCase()
  paragraph = paragraph.trim().split(/\s+/)
  
  var wordCount = {}
  for(let word of paragraph){
    word = word.replace(/\W/g, '')
    wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1; 
  }
    
  return Object.keys(wordCount).toSorted((word1, word2) => wordCount[word2] - wordCount[word1]).slice(0, 3);
}

//tests
console.log(
  deepCmp(
    getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"),
    ["debug", "test", "deploy"] 
  )
)
console.log(
  deepCmp(
    getWords("I like coding. I like testing. I love debugging!"),
    ["i", "like", "coding"]
  )
)
console.log(
  deepCmp(
    getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"),
    ["coding", "python", "in"]
  )
)

function deepCmp(arr1,arr2) {
  if(arr1.length != arr2.length) return false
  for(let i = 0; i< arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false
  }
  return true
}

