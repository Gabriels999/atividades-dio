function testeErros(arr, num) {
  try {
    if (!arr || !num) throw new ReferenceError('Envie os parâmetros.')
    if (typeof arr !== 'object') throw new TypeError('Array inválido.')
    if (typeof num !== 'number') throw new TypeError('Número inválido.')
    if (arr.length !== num) throw new RangeError('Tamanho inválido de array.')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log(`ReferenceError: ${e.message}`)
    } else if (e instanceof TypeError) {
      console.log(`TypeError: ${e.message}`)
    } else if (e instanceof RangeError) {
      console.log(`RangeError: ${e.message}`)
    } else {
      console.log(`Erro não esperado: ${e}`)
    }
  }
}

console.log(testeErros([1, 2, 3, 4], 4))
