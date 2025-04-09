const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', m_n => {
  const [m, n] = m_n.split(' ').map(Number);
  let mat = [];
  let count = 0;
  readline.on('line', line => {
    mat.push(line.split(' ').map(Number));
    count++;
    if(count === m) {
      let ans = BooleanMatrixProblem(m, n, mat);
      for(let i = 0; i < m; ++i) {
        console.log(ans[i].join(' '));
      }
      readline.close();
    }
  });
});

// Function to modify the matrix as per the problem
function BooleanMatrixProblem(m, n, mat) {
  // Create an array to store which rows need to be updated
  let rowsToUpdate = new Array(m).fill(false);
  
  // Step 1: Identify rows that contain at least one `1`
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rowsToUpdate[i] = true;  // Mark the row to be updated
        break;  // No need to check further in this row
      }
    }
  }
  
  // Step 2: Update the matrix by filling rows with `1` if needed
  for (let i = 0; i < m; i++) {
    if (rowsToUpdate[i]) {
      // Set all elements of this row to `1`
      for (let j = 0; j < n; j++) {
        mat[i][j] = 1;
      }
    }
  }
  
  // Return the modified matrix
  return mat;
}
