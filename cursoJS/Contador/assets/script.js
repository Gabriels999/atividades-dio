let currentNumber = document.querySelector('#currentNumber')
let number = 0

function decrement() {
  number = number - 1
  currentNumber.innerText = `${number}`
  if (number < 0) {
    return
  }
}
function increment() {
  number = number + 1
  currentNumber.innerText = `${number}`
  if (number > 10) {
    return
  }
}
