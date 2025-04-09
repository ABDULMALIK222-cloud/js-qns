const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
let input =[];
rl.on('line', (line) => {
  input.push(line);
});
rl.on('', n => {
  let n = parseInt(input[o]);
  let arrA = input[1].split('').map(Number);
  let m = parseInt(input[2]);
  let arrB = input[3].split('').map(Number);
  console.log(arrayproblem(arrA,arrB));
  readline.close();
});
function arrayproblem(arrA, arrB){
  let sumA = 0, sumB =0;
  for(let i = 0; i<arrA.length; i++){
    sumA += arrA[i];
    sumb += arrB[i];
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
  
  
