/*
Rosetta Code Challenge # 9
Problem: Find the amicable pairs below the given positive integer.
Two integers N and M are said to be amicable pairs if N ≠ M and the sum of the proper divisors of N (sum(propDivs(N))) = M
as well as sum(propDivs(M)) = N
*/

function amicablePairsUpTo(maxNum) {
  var amicables = []
  var propDivSums = {}
  for (let n = 2; n < maxNum; n++) {
    let nPropDivSum = propDivSums[n]
    if (nPropDivSum == undefined) {
      nPropDivSum = sumOfPropDivs(n)
      propDivSums[n] = nPropDivSum
    }
    if (nPropDivSum > n && nPropDivSum < maxNum) {
      let mPropDivSum = propDivSums[nPropDivSum]
      if (mPropDivSum == undefined) {
        mPropDivSum = sumOfPropDivs(nPropDivSum)
        propDivSums[nPropDivSum] = mPropDivSum
      }
      if (mPropDivSum == n) amicables.push([n, nPropDivSum])
    }
  }
  return amicables;

  function sumOfPropDivs(num) {
    if (num <= 1) return 0;
    var sum = 1;
    var limit = Math.sqrt(num);
    for (let n = 2; n <= limit; n++) {
      if (num % n == 0) {
        let otherFactor = num / n;
        sum += n;
        sum += otherFactor != n ? otherFactor : 0;
      }
    }
    return sum;
  }
}

//tests
console.log(
  JSON.stringify(amicablePairsUpTo(3000)) ==
  JSON.stringify([[220, 284], [1184, 1210], [2620, 2924]])
)
console.log(
  JSON.stringify(amicablePairsUpTo(20000)) ==
  JSON.stringify([[220, 284], [1184, 1210], [2620, 2924], [5020, 5564], [6232, 6368], [10744, 10856], [12285, 14595], [17296, 18416]])
)

