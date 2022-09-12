'use strict'

function BinarioADecimal(num) {
  let aux = 1, sum = 0, num2 = num.toString(), aux2 = 0;
  for (let i=(num2.length - 1); i >= 0; i--){
    aux2 = parseInt(num2[i]);
    sum = sum + (aux2 * aux);
    aux = aux * 2;
  }
  return sum;
}

function DecimalABinario(num) {
  let aux = 0, aux2 = "", numf = "";
  for (let i=num; i > 0; i){
  aux = (i%2);
  i = (i/2)
  i = Math.floor(i)
  aux2 = aux.toString();
  numf = aux2 + numf;
  }
  return numf;
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}