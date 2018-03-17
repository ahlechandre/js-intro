/**
 * ------------------------------------------------------
 * Exercício 11
 * ------------------------------------------------------
 * 
 * Crie uma função para calcular a área de um retângulo (base * altura) e aplique-a parcialmente.
 */

const rectangleArea = function (base) {
  return function (height) {
    return base * height
  }
}

const rectangleAreaBase = rectangleArea(2)
const rectangleAreaBaseHeight = rectangleAreaBase(4)

console.log(
  rectangleAreaBaseHeight
)
