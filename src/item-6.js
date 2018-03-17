/**
 * ------------------------------------------------------
 * Exercício 6
 * ------------------------------------------------------
 * 
 * > Inicialize uma lista com valores inteiros.
 * > Ande pelo array, some todos os valores e imprima o resultado.
 * 
 */

const list = [10, 20, 30]
let result = 0

for (let value of list) {
  result = result + value
}

console.log(result)
