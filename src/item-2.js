/**
 * ------------------------------------------------------
 * Exercício 2
 * ------------------------------------------------------
 * 
 * > Inicialize três variáveis (var, let e const) condicionalmente. 
 * > Em seguida, tente imprimir o valor de todas em contexto global.
 */

if (true) {
  var x = 10
  let y = 20
  const z = 30
}

console.log('x = ' + x) // 10
console.log('y = ' + y) // ReferenceError...
console.log('z = ' + z) // ReferenceError...