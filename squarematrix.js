const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let t = Number(input.shift());  // Number of test cases
  while(t-- > 0) {
    let n = Number(input.shift());  // Size of the matrix
    let matrix1 = [];
    let matrix2 = [];
    
    // Read matrix 1
    for(let i = 0; i < n; i++) {
      matrix1.push(input.shift().split(' ').map(Number));
    }
    
    // Read matrix 2
    for(let i = 0; i < n; i++) {
      matrix2.push(input.shift().split(' ').map(Number));
    }
    
    // Call the matrix multiplication function
    printMultiplication(matrix1, matrix2, n);
  }
});

function printMultiplication(matrix1, matrix2, n) {
  // Initialize the result matrix with zeros
  let result = Array.from({ length: n }, () => Array(n).fill(0));

  // Perform matrix multiplication
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  // Print the result matrix
  for (let i = 0; i < n; i++) {
    console.log(result[i].join(' '));
  }
}
