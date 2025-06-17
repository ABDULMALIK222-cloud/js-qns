const readline = require("readline").createInterface({
  input:process.stdin,
  output:process.stdout
});
readline.question('',month=>{
  const daysInMoth =[31,28,31,30,31.30,31,31,30,31,30,31];
  let monthnumber = ("Enter the month number",month);
  console.log(daysInmonth[monthnumber-1]);

  readline.close();
});
//
