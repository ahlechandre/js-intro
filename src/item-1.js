/**
 * ------------------------------------------------------
 * Exercício 1
 * ------------------------------------------------------
 * 
 * Crie um programa que imprima “Hello World, this app is running on {Node || Browser}”.
 */

console.log(
  'Hello World, this app is running on ' + (
    typeof window === 'undefined' ? 'Node' : 'Browser'
  ) 
)