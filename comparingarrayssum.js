const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
let input =[];
rl.on('line', (line) => {
  input.push(line);
});
rl.on('close', () => {
  let n = parseInt(input[0]);
  let arrA = input[1].split(' ').map(Number);
  let m = parseInt(input[2]);
  let arrB = input[3].split(' ').map(Number);
  console.log(arrayproblem(arrA,arrB));
});
function arrayproblem(arrA, arrB){
  let sumA = 0, sumB = 0;
  for(let i = 0; i<arrA.length; i++){
    sumA += arrA[i];
    sumB += arrB[i];
  }
  if(sumA > sumB){
    return 'first array is larger';
  }
  else if(sumB > sumA){
    return 'second array is larger';
  }
  else{
    return 'Both are equal';
  }
}
  
  
