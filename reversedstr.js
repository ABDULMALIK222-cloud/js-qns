const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question(' ',n =>{
  let str = n.toString();
  let reversedstr = str.split('').reverse().join('');
  let reversedNum = parseInt(reversedstr);
  console.log(reversedNum);


const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
  rl.on('line',(input) =>{
    const[a,b] = input.split('').map(Number);
    function gcd(a,b){
      while(y!==0){
        let temp = y;
        y = x % y;
        x =temp;
      }
      return x;
    }
    const result = gcd(a,b);
    console.log(result);
    rl.close();
});
// calculate power using javascript at accio job portal
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.on('line',(input) =>{
  const[a,b] = input.split(' ').map(Number);

  let result = Math.pow(a,b);
  console.log(result);
  rl.close();
});
// program to calculate the N stars program at Accio Job using Javascript
const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.on('line',(n) =>{
  n = parseInt(n);
  let stars = '*'.repeat(n).split('').join(' ');
  console.log(stars);
  for(let i = 1; i <= n ; i++){
    console.log("*");
  }
  rl.close();
});
// program to calculate sum of  natural Numbers using Javascript at Accio Job portal
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.on('line',(n) =>{
  n = parseInt(n);
  let sum = (n*(n+1))/2;
  console.log(sum)
  rl.close();
})
// sum of even numbers using function and using loops
function sum(n){
  let sum =0;
  for(let i =1; i<=n;i++){
    if(n %2 ===0){
      sum += i;
    }
  }
  return sum
});
consol.log(sum(12));
// program using loops
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.on('line',(n) =>{
  n = parseInt(n);
  if(n%2!==0){
    n-=1;
  }
  let k = n/2;
  sum = (k*(k+1))/2;
  console.log(sum);
