/* freeCodeCamp Daily Challenge 20/12/2025
Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.
If multiple values are tied for most frequent, remove all of them. Do not change any of the other elements or their order.
*/
function purgeMostFrequent(arr) {
  var counts = {}

  for (let el of arr){
    counts[el] = counts[el] ? counts[el] + 1 : 1
  }
  
  var topCount = Object.values(counts).reduce((top, val) => val > top ? val : top, 0)
  var mostFrequents = Object.keys(counts).filter(key => counts[key] == topCount)
  
  for (let key of mostFrequents){
    arr = arr.filter(el => el != key)
  }
  return arr;
}
// tests
console.log(
  JSON.stringify(purgeMostFrequent([5, 5, 5, 5])) == JSON.stringify([])
  )
console.log(
  JSON.stringify(purgeMostFrequent([1, 2, 2, 3])) == JSON.stringify([1, 3])
  )
console.log(
  JSON.stringify(purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"])) == JSON.stringify(["red", "green", "red", "green"])
  )
