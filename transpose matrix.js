const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let matrix = [];

rl.on('line', (input) => {
  if (!n) {
    n = Number(input);  // First input is the size of the matrix
  } else {
    matrix.push(input.split(' ').map(Number));  // Reading each row of the matrix
    if (matrix.length === n) {  // Once all rows are read, transpose the matrix
      let ans = matrixTranspose(matrix, n);
      for (let i = 0; i < n; i++) {
        console.log(ans[i].join(' '));  // Print the transposed matrix
      }
      rl.close();  // Close the readline interface
    }
  }
});

function matrixTranspose(mat, n) {
  // Transpose the matrix in place
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap elements mat[i][j] and mat[j][i]
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
  return mat;  // Return the transposed matrix
}
