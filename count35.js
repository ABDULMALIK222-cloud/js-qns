const readline = require('readline').createInterface({
  input:process.stdin,
  input:process.stdout
});
readline.question('',N =>{
  readline.question('',arr =>{
    const arrNum = arr.split('').map(Number);
    const ans = ArrayProblem(N,arr);
    console.log(ans);
    readline.close();
  });
});
function ArrayProblem(N,arr){
  return arr.filter(num => num > 35).length;
}
