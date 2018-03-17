/**
 * ------------------------------------------------------
 * Exercício 19
 * ------------------------------------------------------
 * 
 * Escreva uma função que receba uma lista de valores inteiros e retorne uma nova lista com os valores pares.
 */

const evenList = (list) => {
  let even = []

  for (let i = 0; i < list.length; i++) {

    if (list[i] % 2 === 0) {
      even[even.length] = list[i]
    }
  }

  return even
}

const numbers = [1, 2, 3, 4, 5]

const result = evenList(numbers)

console.log(result)
