/**
 * ------------------------------------------------------
 * Exercício 20
 * ------------------------------------------------------
 * 
 * Escreva uma função que receba uma lista de valores inteiros e retorne a somatória de todos eles.
 */

const sum = list => {
  let result = 0

  for (let i = 0; i < list.length; i++) {
    result = result + list[i]
  }

  return result
}

const numbers = [10, 20, 30, 40, 50]

const result = sum(numbers)

console.log(result)
