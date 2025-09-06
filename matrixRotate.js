/*
FCC Daily Challenge 06/09/2025
Problem: Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it.
*/

function rotate(matrix) {
  var rotated= [];

  for(let i= matrix.length - 1; i>=0; i--){
    
    for(let j = 0; j< matrix[i].length; j++){
      if(rotated.length > j)
        rotated[j].push(matrix[i][j])
      else
        rotated.push([matrix[i][j]])
    }
  }

  return rotated;
}

//tests
console.log(
  JSON.stringify(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) ==
  JSON.stringify([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
)
console.log(
  JSON.stringify(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]])) ==
  JSON.stringify([[0, 1, 0], [0, 0, 1], [0, 1, 0]])
)