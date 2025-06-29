const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question('',(N) =>{
  readline.question('',(arr) =>{
    N = parseInt(N);
    arr = arr.split('').map(Number);
    console.log(removeduplicates(N,arr).join(''));
    readline.question();
  });
});
function isPrime(num){
  if(num <= 1) return false
  if(num === 2) return true
  if(num % 2 === 0) return false
  for(let i = 3; i*i <= num; i += 2){
    if(num % i === 0) return false
  }
  return true;
}
function removecomposites(N,arr){
  return arr.filter(num => isPrime(num));
}
