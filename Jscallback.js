function callThisFnBack(number, fn) {
  // Call the callback function with the number and return the result
  return fn(number);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  const args = line.split(" ");
  const num = parseInt(args[0], 10);
  const op = args[1];

  switch (op) {
    case "+":
      console.log(
        callThisFnBack(num, (mun) => {
          return mun + mun;
        })
      );
      break;
    case "-":
      console.log(callThisFnBack(num, (mun) => mun - mun));
      break;
    case "*":
      console.log(callThisFnBack(num, (mun) => mun * mun));
      break;
    case "/":
      console.log(callThisFnBack(num, (mun) => mun / mun));
      break;
    default:
      console.log("Invalid operation");
      break;
  }
});
