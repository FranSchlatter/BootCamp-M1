"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro 
  ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function (value){
  if (value >= this.value) {
    if (this.right) this.right.insert(value);
    else this.right = new BinarySearchTree(value);
  } else {
    if (this.left) this.left.insert(value);
    else this.left = new BinarySearchTree(value);
  };
};

BinarySearchTree.prototype.size = function (){  
  if (!this.left && !this.right) return 1;
  if (this.left && !this.right) return 1 + this.left.size();
  if (!this.left && this.right) return 1 + this.right.size();
  if (this.left && this.right) return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.contains = function (value){
  if (value === this.value) return true;
  if (value > this.value){
    if (!this.right) return false;
    else return this.right.contains(value);
  } else {
    if (!this.left) return false;
    else return this.left.contains(value);
  };
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, dfs){
  if(dfs === "pre-order"){
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, dfs);
    if (this.right) this.right.depthFirstForEach(cb, dfs);
  } else if (dfs === "post-order"){
    if (this.left) this.left.depthFirstForEach(cb, dfs);
    if (this.right) this.right.depthFirstForEach(cb, dfs);
    cb(this.value);
  } else {
    if (this.left) this.left.depthFirstForEach(cb, dfs);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, dfs);
  };
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr=[]){
  if (this.left) arr.push(this.left);
  if (this.right) arr.push(this.right);
  cb(this.value);
  if(arr.length > 0) arr.shift().breadthFirstForEach(cb, arr);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
