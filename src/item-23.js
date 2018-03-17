/**
 * ------------------------------------------------------
 * Exercício 23
 * ------------------------------------------------------
 * 
 * Uma função que receba uma lista de valores inteiros e retorne a somatória de todos eles usando “reduce”.
 */

const sum = list => list.reduce((prev, current) => prev + current)

const numbers = [10, 20, 30, 40, 50]

const result = sum(numbers)

console.log(result)
