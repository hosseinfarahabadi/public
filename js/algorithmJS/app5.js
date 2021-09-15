const a = Number(prompt("please enter a number"));
const b = Number(prompt("please enter a number"));
const c = Number(prompt("please enter a number"));
let mat1 = [];
let mat2 = [];
for (let i = 0; i < a; i++) {
  let mat2 = [];
  for (let j = 0; j < b; j++) {
    mat2.push(Number(prompt("get mat1")));
  }
  mat1.push(mat2);
}

for (let i = 0; i < b; i++) {
  let mat1 = [];
  for (let j = 0; j < c; j++) {
    mat1.push(Number(prompt("get mat2")));
  }
  mat2.push(mat1);
}
console.log(mat1);
console.log(mat2);
let mux = [];
for (let i = 0; i < a; i++) {
  let mux2 = [];
  for (let j = 0; j < c; j++) {
    let sum = 0;
    for (let k = 0; k < b; k++) {
      sum += mat1[i][k] * mat2[k][j];
    }
    mux2.push(sum);
  }
  mux.push(mux2);
}
console.log(mux);
