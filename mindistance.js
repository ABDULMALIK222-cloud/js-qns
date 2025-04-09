const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    let ans = ArrayProblem6(n, arr);
    console.log(ans);
    readline.close();
  });
});

function ArrayProblem6(n, arr) {
  // Array to store indices of even positive integers
  let evenIndices = [];
  
  // Traverse the array and find indices of even positive integers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
      evenIndices.push(i);
    }
  }

  // If there are fewer than two even positive integers, return -1
  if (evenIndices.length < 2) {
    return -1;
  }

  // Find the shortest distance between two indices
  let minDistance = Infinity;

  for (let i = 1; i < evenIndices.length; i++) {
    let distance = Math.abs(evenIndices[i] - evenIndices[i - 1]);
    minDistance = Math.min(minDistance, distance);
  }

  return minDistance;
}
