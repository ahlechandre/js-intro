/**
 * ------------------------------------------------------
 * Exercício 8
 * ------------------------------------------------------
 * 
 * Crie uma expressão de função imediatamente invocada (IIFE) que retorne o ano de nascimento, dado uma idade.
 */

const birth = (function (age) {
  return 2018 - age
})(22)

console.log(birth)
