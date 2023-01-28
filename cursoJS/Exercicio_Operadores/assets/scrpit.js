function teste(a, b) {
  let soma = a + b
  if (a == b) {
    console.log(`${a} e ${b} são iguais. Sua soma é ${soma}.`)
    return
  }
  var maior
  if (soma <= 10) {
    maior = true
  } else if (soma <= 20) {
    maior = false
  }
  console.log(maior)
  switch (maior) {
    case true:
      console.log(
        `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, menor ou igual a 10.`
      )
      break

    case false:
      console.log(
        `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`
      )
      break

    default:
      console.log(
        `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, maior ou igual a 20.`
      )
      break
  }
}
teste(10, 14)
