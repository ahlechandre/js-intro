/**
 * ------------------------------------------------------
 * Exercício 22
 * ------------------------------------------------------
 * 
 * Uma função que receba uma lista de valores inteiros e retorne uma nova lista com os valores pares usando “filter”.
 */

const evenList = list => list.filter(value => value % 2 === 0)

const numbers = [1, 2, 3, 4, 5]

const result = evenList(numbers)

console.log(result)
