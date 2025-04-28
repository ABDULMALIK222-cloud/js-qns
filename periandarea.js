/* program to calculate the perimeter and area of a triangle 
by taking the inputs using node js and javascript */ 

const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});

rl.on('line',(radius)=>{
  let r = radius;
  let pi = 3;
  console.log(pi*r*r);
  console.log(2*pi*r);
});

// program to find the operators solution  and return the solutions
const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question(' ',(input) => {
  const[a,b] = input.split(' ').map(Numbers);
  console.log(a+b);
  console.log(a-b);
  console.log(a*b);
  console.log(Math.floor(a/b));
  console.log(a%b);
  readline.close();
});
