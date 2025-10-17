/*
Rosetta Code Challenge # 5
Problem: Implement a function that calculates how many of the integers from 1 to num (inclusive) are in each of the three classes. 
Output the result as an array in the following format [deficient, perfect, abundant].
Let P(n) be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.
- If P(n) < n then n is classed as deficient
- If P(n) === n then n is classed as perfect
- If P(n) > n then n is classed as abundant
*/

function getDPA(num) {
  var classification = [0, 0, 0];
  for (let n = 1; n <= num; n++) {
    let divisorSum = getSumOfFactors(n)
    let classed = divisorSum < n ? 0 : divisorSum == n ? 1 : 2
    classification[classed]++
  }
  return classification
  function getSumOfFactors(num) {
    var sumOfFactors = 0
    var limit = Math.sqrt(num);
    for (let n = 1; n <= limit; n++) {
      if (num % n == 0) {
        sumOfFactors += (n != num) ? n : 0
        let otherFactor = num / n
        if (otherFactor != n && otherFactor != num) sumOfFactors += otherFactor
      }
    }
    return sumOfFactors;
  }
}
//tests
console.log(
  JSON.stringify(getDPA(5000)) == 
  JSON.stringify([3758, 3, 1239])
  )
console.log(
  JSON.stringify(getDPA(10000)) == 
  JSON.stringify([7508, 4, 2488])
  )
console.log(
  JSON.stringify(getDPA(20000)) == 
  JSON.stringify([15043, 4, 4953])
  )
