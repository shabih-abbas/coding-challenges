/*
Project Euler Challenge # 1
Problem: Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3Or5(number) {
  var sum = 0
  var add3 = true
  var add5 = true
  var multiplicand = 1
  
  while (add3 || add5) {
    let multiple3 = 3 * multiplicand
    let multiple5 = 5 * multiplicand
    add3 = multiple3 < number
    add5 = multiple5 < number
    
    if (add3) {
      if (multiple3 % 5 != 0)
        sum += multiple3
    }
    if (add5) sum += multiple5
    multiplicand++
  }
  
  return sum;
}

//tests
console.log(multiplesOf3Or5(10) == 23);
console.log(multiplesOf3Or5(8456) == 16687353);
console.log(multiplesOf3Or5(19564) == 89301183);
