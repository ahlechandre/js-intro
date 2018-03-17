/**
 * ------------------------------------------------------
 * Exercício 16
 * ------------------------------------------------------
 * 
 * Escreva uma arrow function que imprime “Hello World” e agende-a para ser aplicada após 5 segundos.
 */

const greet = () => console.log('Hello World')

setTimeout(greet, 5000)
