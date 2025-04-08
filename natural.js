const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',n =>{
  n = parseInt(n);
  let sum = (n*(n+1))/2;
  console.log(sum);      
  rl.close();
});
