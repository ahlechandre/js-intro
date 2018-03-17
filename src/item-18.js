/**
 * ------------------------------------------------------
 * Exercício 18
 * ------------------------------------------------------
 * 
 * Escreva uma função que receba uma lista de valores inteiros e retorne uma nova lista com os valores dobrados.
 */

const doubleList = list => {
  let newList = []

  for (let i = 0; i < list.length; i++) {
    newList[i] = list[i] * 2
  }

  return newList
}

const numbers = [10, 20, 30, 40, 50]

const result = doubleList(numbers)

console.log(result)
