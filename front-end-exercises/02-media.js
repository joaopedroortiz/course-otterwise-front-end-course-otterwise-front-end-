nomes = ['igor', 'jose', 'maria']
notasA = [6.5, 5.9, 7.7]
notasB = [8.8, 9.9, 8.7]

function media(n1, n2) {
  return (n1 + n2) / 2
}

function prova(media) {
  var resultado = 'Reprovado'

  if (media > 7) {
    resultado = 'Aprovado'
  }

  return resultado
}

for (var index in nomes) {
  m = media(notasA[index], notasB[index])

  console.log(
    nomes[index] +
      ' - ' +
      notasA[index] +
      ' + ' +
      notasB[index] +
      ' Média:  ' +
      m +
      ' - ' +
      prova(m)
  )
}
