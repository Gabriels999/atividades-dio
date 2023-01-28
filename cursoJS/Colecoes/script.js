function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value == 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Gabriel', 'Admin')
usuarios.set('Gabrielle', 'user')
usuarios.set('Sara', 'user')

console.log(getAdmins(usuarios))
