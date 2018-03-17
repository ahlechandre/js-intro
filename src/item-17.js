/**
 * ------------------------------------------------------
 * Exercício 17
 * ------------------------------------------------------
 * 
 * > Escreva uma arrow function para ser aplicada a cada 2 segundos.
 * > A cada aplicação, a função deve mostrar a quantidade atual de aplicações.
 * > Após a quinta aplicação, a função deve parar de ser aplicada.
 */

let times = 0

const checkTimes = (stop) => {
  times++

  console.log(times)

  if (times >= 5) {
    stop()
  }
}

const intervalID = setInterval(() => checkTimes(
  stopIntervals(intervalID)
), 2000)

const stopIntervals = id => () => clearInterval(id)