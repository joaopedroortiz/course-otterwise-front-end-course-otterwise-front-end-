// let myUser = {
//   name: 'João',
//   age: 24,
//   email: 'joaopedroortiz11@gmail.com',
// }

// console.log(myUser)

// let array = ['a', 'b', 'c', 'd']

// console.log(array[2])

// let dev = {
//   name: 'juca',
//   projects: [
//     { name: 'project1', start: '01-02-2021' },
//     { name: 'project2', start: '03-03-2021' },
//   ],
// }

// console.log(dev.name)
// console.log(dev.projects[1])
// console.log(dev.projects[0].name)

// let array2 = [1, -22, 3, 4, -5]

// for (let i = 0; i < array2.length; i++) {
//   array2[i] = array2[i] * 10
// }

// console.log(array2)

// // 1. Tendo como base o array ['maçã', 'uva', 'morango'], escreva um algoritmo que imprime cada um dos elementos.
// // Saída esperada:
// // maçã
// // uva
// // morango

// // 2. Tendo como base o objeto estoque a seguir:
// // const estoque = {
// //   categoria: 'frutas',
// //   produtos: ['maçã', 'uva', 'morango'],
// //   quantidades: [10, 3, 0]
// // }

// // Escreva um algoritmo que imprime no console o nome da fruta e sua quantidade.
// // Saída Esperada:
// // A quantidade de maçã é 10
// // A quantidade de uva é 3
// // A quantidade de morango é 0

// array = ['uva', 'maça', 'morango']
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

const estoque = {
  categoria: 'frutas',
  produtos: ['uva', 'maça', 'morango'],
  quantidades: [10, 3, 0],
}

// for (let i = 0; i < estoque.produtos.length; i++) {
//   console.log(
//     `A quantidade de ${estoque.produtos[i]} é ${estoque.quantidades[i]}`
//   )
// }

estoque.frutas = []

for (i = 0; i < estoque.produtos.length; i++) {
  estoque.frutas[i] = {
    nome: estoque.produtos[i],
    unidades: estoque.quantidades[i],
  }
}

delete estoque.produtos
delete estoque.quantidades
console.log(estoque)
