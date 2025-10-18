/*
Rosetta Code Challenge #13
Problem: Implement a function to return the lowest integer that satisfies the Babbage problem.
Babbage's Problem: What is the smallest positive integer whose square ends in the digits 269,696?
*/

function babbage(endDigits) {
  var magicNum = endDigits ** (1/2)
  var prefix = 1
  while(!isInt(magicNum)){
    magicNum = Number(String(prefix) + String(endDigits)) ** (1/2)
    prefix++
  }
  return magicNum;
  function isInt(n){
    return Math.round(n) == n
  }
}
//test
console.log(babbage(269696) == 25264)
