// Faaaaala @Turma 03 ! Segue os exercícios que teremos como base para nossa discussão de amanhã (09/09):

// 1 - Dado o array [{product: 'banana kg', price: 2.25}, {product: 'arroz 1kg', price: 6.48}, {product: 'pão francês kg', price: 12}, {product:'café solúvel 50g', price: 3.59}], crie um algoritmo que transforma esse array em um objeto dicionário, com a propriedade sendo o nome do produto e o valor o preço do produto.

const array = [
  { product: 'banana kg', price: 2.25 },
  { product: 'arroz 1kg', price: 6.48 },
  { product: 'pão francês kg', price: 12 },
  { product: 'café solúvel 50g', price: 3.59 },
]

let novoArray = array.reduce((acc, elem) => {
  acc[elem.product] = elem.price //(acc é o novo array)  "elem" é o termo que muda de acordo com a repetição, então acc[elem.product] na primeira repetição é o mesmo que novoArray[banana kg] e elem.price é o preço naquela repetição.

  //então resumindo acc[elem.product] = elem.price é o mesmo que criar uma nova propriedade no objeto assim -> novoArray.banana=2.25

  return acc
}, {}) //o objeto iniciado aqui é o acumulador vazio no início do laço de repetição
console.log(novoArray)

let orderArray = array.sort((a, b) => {
  return b.price - a.price //o sort sempre pega o primeiro e o segundo elementos de um array e compara eles, então é possível pegar os valores das propriedades dos objetos em arrays e comparar, assim podendo ordenar eles pelo valor
})

console.log(orderArray)

// Saída esperada:
// {
//   'banana kg': 2.25,
//   'arroz 1kg': 6.48,
//   'pão francês kg': 12,
//   'café solúvel 50g': 3.59
// }

// 2 - Dado um array de números ordene eles de forma decrescente.
// // Exemplo entrada:
// const num = [12, 32, 54, 6, 8, 89, 64, 64, 6]

// novoNum = num.sort((a, b) => b - a)

// console.log(novoNum)
// // Exemplo saída:
// // [ 89, 64, 64, 54, 32, 12, 8, 6, 6 ]
