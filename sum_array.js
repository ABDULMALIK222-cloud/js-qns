function sum_array(arr){
  const total = arr.flat().reduce((acc,curr) => (acc + curr,0));
  console.log(total);
}
const readline = require('readline')
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  terminal:false
});
rl.on('',(line) => {
  sum_array(parse(line));
});
