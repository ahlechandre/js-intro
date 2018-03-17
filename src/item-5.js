/**
 * ------------------------------------------------------
 * Exercício 5
 * ------------------------------------------------------
 * 
 * > Inicialize uma variável contendo um objeto.
 * > Ande pelas propriedades do objeto, concatene suas keys em uma string separando-as por “-” e imprima o resultado. 
 */

const object = {
  a: 10,
  b: 20,
  c: 30
}
let result = ''

for (let key in object) {
  result = result + key + '-'
}

console.log(result)
