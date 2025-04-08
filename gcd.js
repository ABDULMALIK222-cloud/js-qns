const readline = require("readline");
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.on('line'(input)=>{
  const[a,b] = input.split(' ').map(Number);
  function gcd(x,y){
    while(y!=0){
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
  const result = gcd(a,b);
  console.log(result);
  rl.close();
});
