'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let arrpivote = [array[0]], arrder = [], arrizq = [];
  for(let i=1; i<array.length; i++){
    if (array[i] < arrpivote[0]) arrizq.push(array[i]);
    else arrder.push(array[i]);
  };
  return quickSort(arrizq).concat(arrpivote).concat(quickSort(arrder));
};

//   let arrpivote = [], arrder = [], arrizq = [];
//   arrpivote.push(array[0]);
//   if(array.length > 1){
//     for(let i=1; i<array.length; i++){
//       if (array[i] < arrpivote[0]) arrizq.push(array[i]);
//       else if (array[i] > arrpivote[0]) arrder.push(array[i]);
//       else arrpivote.push(array[i]);
//     };
//     if(arrizq.length > 1) arrizq = quickSort(arrizq);
//     if(arrder.length > 1) arrder = quickSort(arrder);
//   };
//   return arrizq.concat(arrpivote).concat(arrder);

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arr1 = [], arr2 = [], arr3=[], j = 0, k = 0;
  if (array.length > 1) {
    for (let i=0; i<array.length; i++){
      if(i < (array.length/2)) arr1.push(array[i]);
      else arr2.push(array[i]);
    };
  };

  if (arr1.length > 1) arr1 = mergeSort(arr1);
  if (arr2.length > 1) arr2 = mergeSort(arr2);

  while (arr1[j] !== undefined || arr2[k] !== undefined){
    if (arr2[k] === undefined){
      arr3 = arr3.concat(arr1[j]);
      j++;
    };
    if (arr1[j] === undefined){
      arr3 = arr3.concat(arr2[k]);
      k++;
    };
    if(arr1[j] < arr2[k]){
      arr3 = arr3.concat(arr1[j]);
      j++;
    } else {
      arr3 = arr3.concat(arr2[k]);
      k++;
    };
  };
  return arr3;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
