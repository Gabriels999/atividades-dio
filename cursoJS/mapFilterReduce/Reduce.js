const lista = [
  {
    nome: 'alho',
    valor: 19
  },
  {
    nome: 'batata',
    valor: 10
  },
  {
    nome: 'alface',
    valor: 1
  }
]

const saldoDisp = 100

function calculaCompras(saldoDisponivel, list) {
  return list.reduce(function (prev, current) {
    return prev - current.valor
  }, saldoDisponivel)
}

console.log(calculaCompras(saldoDisp, lista))
