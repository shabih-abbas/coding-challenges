/*
Rosetta Code Challenges #1

Problem: There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. 
The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. 
Return the final result in an array, with only the door number included in the array if it is open.
*/

function getFinalOpenedDoors(numDoors){
  var openDoors= []
  for(let i = 1; i <= numDoors; i++){
    if(hasFactors(i) % 2 == 1)
      openDoors.push(i)
  }
  return openDoors  
  
  function hasFactors(n){
    var sqrt = Math.sqrt(n)
    var factors = 0
    for(let i=1; i<= sqrt; i++){
      if((n % i) == 0)
        factors += (i == n/i) ? 1 : 2
    }
    return factors
  }  
}
