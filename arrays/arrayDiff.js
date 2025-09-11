/*
FCC Daily Challenge 10/09/2025
Problem: Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays. 
The returned array should be sorted in alphabetical order.
*/

function arrayDiff(arr1, arr2) {
  arr1 = arr1.sort(strCmp)
  arr2 = arr2.sort(strCmp)
  var index1 = 0
  var index2 = 0
  var diff = []

  while(index1 < arr1.length && index2 < arr2.length){
    if(arr1[index1] < arr2[index2]){
      diff.push(arr1[index1])
      index1++
    }
    else if(arr1[index1] > arr2[index2]){
      diff.push(arr2[index2])
      index2++
    }
    else {
      let dup = arr1[index1]
      
      while(index1 < arr1.length && arr1[index1] == dup) index1++
      
      while(index2 < arr2.length && arr2[index2] == dup) index2++
    }
  }
  
  diff = [...diff, ...arr1.slice(index1), ...arr2.slice(index2)]
  
  return diff
  
  function strCmp(s1, s2){
    if(s1 < s2) return -1
    if(s1 > s2) return 1
    return 0
  }
}

// tests
console.log(
  deepCmp(
    arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]),
    ["freeCodeCamp", "rocks"]
  ) == true
)
console.log(
  deepCmp(
    arrayDiff(["one", "two", "three", "four", "six"], ["one", "three","eight", "eight"]),
    ["eight", "eight", "four", "six", "two"]
  ) == true
)
console.log(
  deepCmp(
    arrayDiff(["apple" , "banana", "cherry", "apple"], ["apple", "banana"]),
    ["cherry"]
  ) == true
)

function deepCmp(arr1,arr2) {
  if(arr1.length != arr2.length) return false
  for(let i = 0; i< arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false
  }
  return true
}
