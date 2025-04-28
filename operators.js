// program of AgentBinod from javascript course at Accio Job
const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question(' ',(input) =>{
  console.log("Hi My Name is",input);
  readline.close();
});

// program  of Temperature conversion from Javascript at Accio Job
const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question(' ',(celsius) =>{
  let c = celsius;
  let f = (c * (9/5) + 32);
  console.log(f);
  readline.close();
});
// program of same conversion of cencius into farheinheit but to fixed value of six digits
const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question(' ', (celsius) =>{
  let c = celcius;
  let f = (c * (9/5) + 32);
  console.log(f.toFixed(6));
  readline.close();
});
//program to age from javascript at accio job
const readline = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question(' ',(age) =>{
    switch(parseInt(age)){
        case 28:
          console.log(" Iam Young");
          break;

        default:
          console.log("iam not Young");
          break;
    }
    readline.close();
  
});
