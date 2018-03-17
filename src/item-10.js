/**
 * ------------------------------------------------------
 * Exercício 10
 * ------------------------------------------------------
 * 
 * Crie uma closure que retorna um argumento inteiro dobrado vindo da função parente.
 */

const outer = function (number) {
  const inner = function () {
    return number * 2
  }

  return inner()
}

const result = outer(10)

console.log(result)
