// program to check the triangle based on the conditions
const readline = require('readline');
const rl = readline.createInterface( {
  input:process.stdin,
  output:process.stdout
});
rl.on('line',(side) => {
  let [a,b,c] = side.split(' ').map(Number);
  let sideArr = [a,b,c].sort((x,y) => x - y);
   a = sideArr[0];
   a = sideArr[1];
   a = sideArr[2];
   const sumSquare = a*a + b*b + c*c;
   const doublesquare = 2*c*c;
   if(doublesquare < sumsquare){
     console.log("Acute Angled Triangle");
   }else if(doubleSquare === sumsquare){
     console.log("Right Angled Triangle");
   }else{
     console.log("Obtuse Angled Triangle");
   }
  rl.close();
});
//program of students grades classification from Javascript at Accio job
const readline = require('readline');

const rl = redline.createInterface ( {
  input:process.stdin,
  output:process.stdout
});
rl.on('line', (n) => {
  n = parseInt(n);
  if(n > 90){
    console.log("Excellent");
  }else if(n > 80 && n < 90){
        console.log("Good");
    }else if(n > 70 && n < 80){
        console.log("Fair");
    }else if(n > 60 && n < 70){
        console.log("Meet expectations");
    }else{
        console.log("Below expectations");
    }

  rl.close();
});
