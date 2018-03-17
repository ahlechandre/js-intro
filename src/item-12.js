/**
 * ------------------------------------------------------
 * Exercício 12
 * ------------------------------------------------------
 * 
 * Crie uma função recursiva que decrementa um número inteiro até -100.
 */

const loopBack = function (number) {
  console.log(number)

  if (number <= -100) {
    return;
  }

  return loopBack(number - 1)
}

console.log(
  loopBack(100)
)
