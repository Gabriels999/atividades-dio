const alunos = [
  {
    nome: 'Heitor',
    nota: 5,
    turma: '3C'
  },
  {
    nome: 'Larissa',
    nota: 7.5,
    turma: '1B'
  },
  {
    nome: 'Isabela',
    nota: 8.5,
    turma: '1B'
  },
  {
    nome: 'Gabrielle',
    nota: 10,
    turma: '1A'
  }
]

function AlunosAprovados(array, media) {
  let aprovados = []
  for (i = 0; i < array.length; i++) {
    const { nota, nome } = array[i]
    if (nota >= media) {
      aprovados.push(nome)
    }
  }
  return aprovados
}
console.log(AlunosAprovados(alunos, 7))
