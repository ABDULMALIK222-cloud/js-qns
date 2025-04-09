var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
let mat =[];
var lineNumber = -1;

readline.on("line", readInputs);

let n, m;

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  
  if (lineNumber == 0) {
    n=inputArr[0].split(' ')[0];
	  m=inputArr[0].split(' ')[1];
  
     
  }
   
  else{
      let Arr = inputArr[lineNumber].split(' ').map((x) => x.trim()).filter((x) => x !== '');

       mat.push(Arr);
      
  }
  
  
  if (lineNumber ==  n) {
    logic("s");
    readline.close();
  }
}

function logic(input) {

  let rotated=rotateImage(mat);
  for(let i=0;i<mat.length;i++){
	  console.log(rotated[i].join(' '));
  }
}




function rotateImage(matrix) {
  for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
  for(let i = 0 ;i < n; i++){
    mat[i].reverse();
  }
  return mat;
}
