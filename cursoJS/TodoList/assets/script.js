const new_item = document.querySelector('#new_item')
const taskList = document.querySelector('#taskList')

function insere() {
  let li = document.createElement('li')
  const check = document.createElement('input')
  li.textContent += `${new_item.value}`
  const list = document.querySelector('#list')
  list.appendChild(li)

  check.setAttribute('type', 'checkbox')
  list.appendChild(li)
}
