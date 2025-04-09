const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    printRatios(arr);
    readline.close();
  });
});

function printRatios(arr) {
  let positivecount =0;
  let negativecount =0;
  let zerocount =0;
  for(let i=0; i< arr.length ; i++){
    if(arr[i]> 0){
      positivecount++;
    }
    else if(arr[i] < 0){
      negativecount++;
    }
    else{
      zerocount++;
    }
  }
  let total =arr.length;
  let positiveratio = positivecount/total;
  let negativeratio = negativecount/total;
  let zeroratio = zerocount/total;
  console.log(positiveratio.toFixed(6));
  console.log(negativeratio.toFixed(6));
  console.log(zeroratio.toFixed(6)); 
}
