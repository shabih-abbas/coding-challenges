/*
Rosetta Code Project Challenge # 3
Problem: Implement a function that returns the sum of the integer partition function of a given number.
The integer partition function is the total number of names of an integer, for example:
- The integer 1 has 1 name "1".
- The integer 2 has 2 names "1+1" and "2".
- The integer 3 has 3 names "1+1+1", "2+1", and "3".
- The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".
- The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".
This can be visualized in the following form:
          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
Where row n corresponds to integer n, and each column C in row m from left to right corresponds to the number of names beginning with C.
Note that the sum of the n-th row P(n) is the integer partition function of the integer n.
*/

function numberOfNames(num) {
  var pyramid = [,]
  
  for (let n = 1; n <= num; n++) {
    let row = [,]
    
    for (let c = 1; c < n; c++) {
      let lastName = n - c
      if (c < lastName) row.push(getPartitions(lastName, c))
      else row.push(getPartitions(lastName, lastName))
    }
    row.push(1)
    pyramid.push(row)
  }
  return getPartitions(num, num)
  
  function getPartitions(num, limit) {
    return pyramid[num].slice(1, limit + 1).reduce((sum, part) => sum + part, 0)
  }
}
//test
console.log(numberOfNames(1) === 1)
console.log(numberOfNames(5) === 7)
console.log(numberOfNames(12) === 77)
console.log(numberOfNames(123) === 2552338241)
