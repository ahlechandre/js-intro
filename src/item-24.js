/**
 * ------------------------------------------------------
 * Exercício 24
 * ------------------------------------------------------
 * 
 * > Criar duas funções construtoras de objetos: uma para representar pessoas e outra para carros. 
 * > Todo carro deve ter um atributo “proprietário”, que receberá uma instância de pessoas. 
 * > Em carro, escreva um método para retornar o nome do proprietário.
 */

function Person(name, age) {
  this.name = name
  this.age = age
}

function Car(make, model, year, owner) {
  this.make = make
  this.model = model
  this.year = year
  this.owner = owner
  this.getOwnerName = () => this.owner.name
}

const john = new Person('John', 20)
const mustang = new Car('Ford', 'Mustang', 1969, john)

console.log(mustang) // Car {...}
console.log(mustang.getOwnerName()) // "John"
