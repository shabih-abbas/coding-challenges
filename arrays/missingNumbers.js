/*
FCC Daily Challenge 13/09/2025
Problem: Given an array of length n of integers from 1 to m, inclusive, return an array of all the missing integers between 1 and m (where m is the largest number in the given array).
- The given array may be unsorted and may contain duplicates.
- The returned array should be in ascending order.
- If no integers are missing, return an empty array.
Complexity: O(nlogn + n + m)
*/

function findMissingNumbers(arr) {
  arr.sort((a,b) => a - b)
  var missing = []
  var countNums= arr.length;
  for(let i=0; i< countNums; i++){
    if(i+1 < countNums){
      for(let j=arr[i]+1; j < arr[i+1]; j++)
        missing.push(j)
    }
  }
  return missing;
}

//tests
console.log(
  deepCmp(
    findMissingNumbers([10, 1, 10, 1, 10, 1]),
    [2, 3, 4, 5, 6, 7, 8, 9]
  ) == true
)
console.log(
  deepCmp(
    findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]),
    [11]
  ) == true
)


function deepCmp(arr1,arr2) {
  if(arr1.length != arr2.length) return false
  for(let i = 0; i< arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false
  }
  return true
}
