const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('',n =>{
  let n = parseInt(n);
  let stars = '*'.repeat(n).split().join('');
  console.log(stars);
  for(let i = 1; i <= n; i++){
    console.log('*');
  }
  rl.close();
});
