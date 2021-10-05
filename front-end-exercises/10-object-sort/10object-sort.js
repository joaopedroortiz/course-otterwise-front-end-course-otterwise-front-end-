const colaboradores = [
  { name: 'Juca', idade: 25, cargo: 'front-end' },
  { name: 'Márcia', idade: 23, cargo: 'back-end' },
  { name: 'Vitória', idade: 28, cargo: 'designer' },
  { name: 'Fernando', idade: 19, cargo: 'estagiário' },
  { name: 'Fabiane', idade: 25, cargo: 'back-end' },
  { name: 'Jéssica', idade: 23, cargo: 'front-end' },
]

// 1
// a)imprima no console um array somente com os nomes
const nomesCol = colaboradores.map((elemento) => {
  return elemento.name
})
console.log(nomesCol)

// b)imprima no console um array com os colaboradores q são front-end
const front = colaboradores.filter((elemento) => {
  return elemento.cargo === 'front-end'
})

console.log(` Os colaboradores Front-End são ${front
  .map((elemento) => {
    return elemento.name
  })
  .reduce((acc, elem) => {
    return acc + ', ' + elem
  })}
`)
// c) imprima no console o primeiro col. maior de 23
const colMaior = colaboradores.find((elem) => {
  return elem.idade > 23
})
console.log(colMaior)
// d)imprima no console todos os maiores de 18 anos
const maiores = colaboradores.filter((elemento) => {
  return elemento.idade >= 18
})
console.log(maiores)

// e)imprima no console se existe algum estagiário

const estagiario = colaboradores.some((elem) => {
  return elem.cargo === 'estagiário'
})

console.log(estagiario)

// //erros
// // f)imprima no console a soma da idade de todos colaboradores

// const idadesCol = colaboradores.reduce((acc, elem) => {
//   return acc + elem.idade
// })
// console.log(idadesCol)
// // g) imprima no console um array com os colaboradores ordenados de forma crescente.

// const colOrdenados = colaboradores.idade.sort((a, b) => a - b)
// console.log(colOrdenados)
// //

// 1 - Crie um algoritmo que tem como entrada um array e imprime no console um novo array modificado como somente os números múltiplos de 5 multiplicados por 10.
// Exemplo entrada:
const array1 = [5, 7, 1, 30, 23, 50, 10]
const mp5 = array1.filter((elem) => {
  return elem % 5 === 0
})

console.log(
  mp5.map((elem) => {
    return elem * 10
  })
)
// Exemplo saída:
// [50, 300, 500, 100]

// 2 - Tendo como entrada um array de números que representam notas de um estudante, calcule e imprima a média no console com no máximo duas casas decimais. O array de entrada tem tamanho variável.
// Exemplo entrada 1:
const array2 = [8, 9, 5]

// Exemplo saída 1:
// 7,33

// Exemplo entrada 2:
const array3 = [9, 5, 8, 7, 10]

// Exemplo saída 2:
// 7,8

function media(arr) {
  let res = arr.reduce((acc, elem) => {
    return acc + elem
  })
  console.log((res / arr.length).toFixed(2))
}

media(array2)
media(array3)

// 3 - Dado um array de usuários (objetos) com as propriedades name e address (endereço), imprima no console uma string que identifica os usuários com cadastro completo (name e address preenchido).
// Exemplo entrada:
const usuarios = [
  { name: 'Érico', address: 'Rua das flores nº 1' },
  { name: 'Juca', address: null },
  { name: 'Patrícia', address: 'Alameda dos anjos nº 9' },
  { name: 'Sérgio' },
]

const completos = usuarios.filter((elem) => {
  return elem.name && elem.address
})

console.log(
  `Os usuários ${completos.map((elem) => {
    return elem.name
  })} tem cadastro completo`
)

// ou

console.log(
  `os usuários ${usuarios
    .filter((elem) => {
      return elem.name && elem.address
    })
    .map((elem) => {
      return elem.name
    })
    .reduce((acc, elem) => {
      return acc + ', ' + elem
    })} tem cadastro completo.`
)

// Exemplo saída:
// ‘Os usuários Érico, Patrícia, tem cadastro completo.
