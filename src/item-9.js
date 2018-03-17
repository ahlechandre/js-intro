/**
 * ------------------------------------------------------
 * Exercício 9
 * ------------------------------------------------------
 * 
 * Crie uma função que acessa e altera o valor de uma variável externa ao seu escopo.
 */

let outerScope = 0

const func = function () {
  outerScope++
}

console.log(`Before: ${outerScope}`)

func()

console.log(`After: ${outerScope}`)
