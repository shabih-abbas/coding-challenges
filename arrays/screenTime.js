/*
FCC Daily Challenge 12/09/2025
Problem: Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:
- If any single day has 10 hours or more, it's too much.
- If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
- If the average of the seven days is greater than or equal to 6 hours, it's too much.
*/

function tooMuchScreenTime(hours) {
  var totalHours = 0;
  var days = hours.length
  for(let i = 0; i < days; i++){
    if(hours[i] >= 10) return true
    if(i+2 < days){
      if((hours[i]+hours[i+1]+hours[i+2])/3 >= 8)
        return true
    }
    totalHours += hours[i]
  }
  
  return totalHours / days >= 6;
}

//tests
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) == true)
console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) == true)
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) == true)

console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) == false)
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) == false)
