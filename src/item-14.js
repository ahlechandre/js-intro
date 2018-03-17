/**
 * ------------------------------------------------------
 * Exercício 14
 * ------------------------------------------------------
 * 
 * Escreva a seguinte expressão de função da forma mais concisa possível (prêmio para quem utilizar menos caracteres):
 * 
 * function (x, y, z) {
 *   if (x === 0) {
 *     return y + z
 *   }
 *   return x + y + z
 * }
 */

(x, y, z) => x === 0 ? y + z : x + y + z