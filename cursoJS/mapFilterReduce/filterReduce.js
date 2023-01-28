function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 == 0
}
const meuArr = [1, 2, 3, 4, 5, 8, 77, 103, 88]

// console.log(filtraPares(meuArr))

function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    return prev + current
  })
}

console.log(somaNumeros(meuArr))
