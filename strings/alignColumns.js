/*
Rosetta Code Challenge # 8
Problem: Given an array of many lines, where fields within a line are delineated by a single $ character, 
write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space. 
Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.
*/

function formatText(input, justification) {
  input = input.map(row => row.replace(/^\$+/, '').split('$'))
  var totalCols = input.reduce((maxCol, row) => row.length > maxCol ? row.length : maxCol, 0)

  for (let col = 0; col < totalCols; col++) {
    let colWidth = 0;

    for (let row = 0; row < input.length; row++) {
      if (col < input[row].length) {
        colWidth = input[row][col].length > colWidth ? input[row][col].length : colWidth;
      }
    }

    for (let row = 0; row < input.length; row++) {
      if (col < input[row].length) {
        let padding = colWidth - input[row][col].length
        input[row][col] = justify(input[row][col], justification, padding)
      }
    }
  }

  return input.map(row => row.join(' ')).join('\n')

  function justify(str, direction, padding) {
    if (str == '') return str

    if (direction == 'left') return str + ' '.repeat(padding);

    if (direction == 'right') return ' '.repeat(padding) + str;

    var leftPadding = Math.floor(padding / 2)
    var rightPadding = padding - leftPadding
    return ' '.repeat(leftPadding) + str + ' '.repeat(rightPadding)
  }
}
