/*
FCC Js Curriculum
Problem: Create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.
*/

function gcd(a, b) {
  var dividend = Math.max(a, b)
  var divisor = Math.min(a, b)
  while (divisor != 0) {
    let remainder = dividend % divisor
    dividend = divisor
    divisor = remainder
  }
  return dividend;
}
function smallestCommons(limits) {
  var lower = Math.min(...limits)
  var upper = Math.max(...limits)
  var lcm = 1;
  for (let n = lower; n <= upper; n++) {
    lcm = lcm * n / gcd(lcm, n)
  }
  return lcm
}
//tests
console.log(smallestCommons([5, 1]) == 60)
console.log(smallestCommons([1, 13]) == 360360)
console.log(smallestCommons([23, 18]) == 6056820)
