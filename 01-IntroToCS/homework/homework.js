'use strict'

function BinarioADecimal(num) {
  let arr = [], sum = 0, exp = 0;
  arr = num.split("");
  arr.reverse();
  arr.forEach(e => {
    sum = sum + arr[e]*(2**exp)
    exp++;
  });
  return sum;
}

function DecimalABinario(num) {
  let arr = [];
  for (let i = 0; num > 0; i++){
    arr.push(num%2);
    num = Math.floor(num/2);
  }
  return arr.reverse().join("");
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}