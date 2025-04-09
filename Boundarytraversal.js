const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let [m, n] = input[0].split(' ').map(Number);
  let matrix = [];
  for (let i = 1; i <= m; i++) {
    matrix.push(input[i].split(' ').map(Number));
  }
  boundaryTraversal(m, n, matrix);
});

// Function to perform boundary traversal in clockwise direction
function boundaryTraversal(m, n, matrix) {
  let result = [];

  // Step 1: Traverse the top row (first row)
  for (let i = 0; i < n; i++) {
    result.push(matrix[0][i]);
  }

  // Step 2: Traverse the last column (from second row to last row)
  for (let i = 1; i < m; i++) {
    result.push(matrix[i][n - 1]);
  }

  // Step 3: Traverse the bottom row (if it's not the same as the top row)
  if (m > 1) {
    for (let i = n - 2; i >= 0; i--) {
      result.push(matrix[m - 1][i]);
    }
  }

  // Step 4: Traverse the first column (if it's not the same as the last column)
  if (n > 1) {
    for (let i = m - 2; i > 0; i--) {
      result.push(matrix[i][0]);
    }
  }

  // Print the result (boundary traversal in clockwise direction)
  result.forEach(num => console.log(num));
}
