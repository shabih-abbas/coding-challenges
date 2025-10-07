/*
Project Euler Challenge # 3
Problem: Find the largest prime factor of the given number.
*/

function largestPrimeFactor(number) {
  var limit = Math.sqrt(number)
  var largestPrime = 1
  for (let n = 1; n <= limit; n++) {
    if (number % n == 0) {
      let largerFactor = number / n
      if (isPrime(largerFactor)) return largerFactor
      if (isPrime(n)) largestPrime = n
    }
  }
  return largestPrime;
  function isPrime(num) {
    var limit = Math.sqrt(num)
    for (let n = 2; n <= limit; n++) {
      if (num % n == 0) return false
    }
    return true
  }
}

//tests
console.log(largestPrimeFactor(8) == 2);
console.log(largestPrimeFactor(13195) == 29);
console.log(largestPrimeFactor(600851475143) == 6857);
