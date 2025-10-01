/*
Rosetta Code Project Challenge # 2
Problem: Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, 
and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".
Rules:
- Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
- Division should use floating point or rational arithmetic, etc, to preserve remainders.
- Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
- The order of the digits when given does not have to be preserved.
*/

function solve24(numStr) {
  var operators = {
    "+": {
      cat: 1,
      operate(num1, num2) { return num1 + num2 }
    },
    "-": {
      cat: 1,
      operate(num1, num2) { return num1 - num2 }
    },
    "*": {
      cat: 2,
      operate(num1, num2) { return num1 * num2 }
    },
    "/": {
      cat: 2,
      operate(num1, num2) { return num1 / num2 }
    }
  }
  var nums = numStr.split('').map(num => new Expression(parseInt(num), null, String(num)))
  var ans = makeExprs(nums).find((expr) => expr.num == 24)
  
  // console.log(allExprs)
  // var ans = allExprs.filter(expr => expr.num == 24)
  // var test = ans.filter(expr => Math.floor(eval(expr.literal)) != Math.floor(expr.num))
  // var test = ans.filter((expr,_,arr) => arr.reduce((count, expr2)=> count + Number(expr.literal== expr2.literal), 0) > 1)

  return ans ? ans.literal : "no solution exists"
  
  function makeExprs(terms) {
    if (terms.length == 1) return terms
    
    var exprs = []
    
    for (let i = 0; i < terms.length; i++) {
      let otherTerms = terms.filter((_, index) => index != i)
      let otherExprs = makeExprs(otherTerms)

      for (let expr of otherExprs) {
        exprs = exprs.concat(performOps(terms[i], expr))
      }
      
      for (let j = 0; j < otherTerms.length; j++) {
        let remainingTerms = otherTerms.filter((_, index) => index != j)
      
        if (remainingTerms.length) {
          let curExprs = performOps(terms[i], otherTerms[j])
          let remainingExprs = makeExprs(remainingTerms)
        
          for (let curExpr of curExprs) {
            for (let expr of remainingExprs)
              exprs = exprs.concat(performOps(curExpr, expr, false))
          }
        }
      }
      // console.log(exprs)
    }
    return exprs
  }
  
  function performOps(expr1, expr2, all = true) {
    return Object.keys(operators)
      .filter(op =>
        all ||
        isHigherOp(op, expr1) ||
        isHigherOp(op, expr2)

      )
      .map(op => {
        var newExpr = new Expression(
          operators[op].operate(expr1.num, expr2.num),
          op,
          makeLiteral(op, expr1, expr2)
        )
        return newExpr
      })
  }
  
  function makeLiteral(op, expr1, expr2) {
    var literal1 = isHigherOp(op, expr1) ? '(' + expr1.literal + ')' : expr1.literal
    var literal2 = isHigherOp(op, expr2) || (expr2.lastOp && operators[op].cat == operators[expr2.lastOp].cat && ['/', '-'].includes(op)) ? '(' + expr2.literal + ')' : expr2.literal

    return literal1 + op + literal2
  }
  
  function Expression(num, lastOp, literal) {
    this.num = num
    this.lastOp = lastOp
    this.literal = literal
  }
  function isHigherOp(op, expr) {
    return expr.lastOp && operators[op].cat > operators[expr.lastOp].cat
  }
}
// console.log(solve24("1111"))

