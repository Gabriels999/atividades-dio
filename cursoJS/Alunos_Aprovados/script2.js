function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Jacira',
  idade: 45
}
const pessoa2 = {
  nome: 'Juliana',
  idade: 24
}
const pessoa3 = {
  nome: 'Pedro',
  idade: 50
}

console.log(calculaIdade.apply(pessoa3, [30]))
