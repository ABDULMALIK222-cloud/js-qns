const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',(line) => {
  const[a,b] = line.split(' ').map(Number);
  let result = Math.pow(a,b);
  console.log(result);
  rl.close();
});
