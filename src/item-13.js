/**
 * ------------------------------------------------------
 * Exercício 13
 * ------------------------------------------------------
 * 
 * Crie uma função que receba um parâmetro padrão com valor “false“ e um número indefinido de argumentos como array e imprima todos os parâmetros.
 */

const checkParams = function (first = false, ...args) {
  console.log(
    first, args
  )
}

checkParams(10, 20, 30, 40)
