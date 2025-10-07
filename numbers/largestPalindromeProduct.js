/*
Project Euler Challenge # 4
Problem: Given a positive integer n, find the largest palindrome made from the product of two n-digit numbers.
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99
*/

function largestPalindromeProduct(n) {
  var cur = 10 ** n - 1
  var lower = 10 ** (n - 1)
  
  for (let i = 0; i < 2; i++) {
    while (cur >= lower) {
      let palindrome = makePalindrome(cur, i)
      if (isNDigitProduct(palindrome, n)) return palindrome
      cur--
    }
  }
  
  function makePalindrome(num, odd) {
    num = String(num)
    var reverseNum = num.split('').slice(0, num.length - odd).reverse().join('')
  
    return Number(num + reverseNum)
  }
  
  function isNDigitProduct(num, n) {
    var upper = 10 ** n - 1
    var lower = 10 ** (n - 1)
    var middle = Math.sqrt(num)
    if (middle > upper || middle < lower) return false
    var possibleFactor = Math.floor(middle)
    
    while (possibleFactor > 0) {
      if (num % possibleFactor == 0) {
        if (possibleFactor >= lower && (num / possibleFactor) <= upper) return true
        return false
      }
      possibleFactor--
    }
    return false
  }
}

//tests
console.log(largestPalindromeProduct(2) == 9009);
console.log(largestPalindromeProduct(3) == 906609);
console.log(largestPalindromeProduct(4) == 99000099);
