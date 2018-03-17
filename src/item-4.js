/**
 * ------------------------------------------------------
 * Exercício 4
 * ------------------------------------------------------
 * 
 * Lance um erro condicionalmente e capture-o para exibir sua mensagem. 
 */

const shouldThrowAnError = true

try {

  if (shouldThrowAnError) {
    throw new Error('My error message here')
  }
} catch (exception) {
  console.log(exception.message)
} 
