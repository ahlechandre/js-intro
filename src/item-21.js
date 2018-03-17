/**
 * ------------------------------------------------------
 * Exercício 21
 * ------------------------------------------------------
 * 
 * Escreva uma função que receba uma lista de valores inteiros e retorne uma nova lista com os valores dobrados usando “map”.
 */

const doubleList = list => list.map(value => value * 2)

const numbers = [10, 20, 30, 40, 50]

const result = doubleList(numbers)

console.log(result)
