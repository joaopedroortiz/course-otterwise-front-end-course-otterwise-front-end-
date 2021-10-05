// - Tendo como informação dois valores, value1 e value2, faça um programa que imprima os dois valores no console. Após imprimir, troque a informação de value1 pela informação do value2 e imprima no console novamente.
// Exemplo Entrada:
// 3
// 12

// Exemplo Saída:
// Valor 1 = 3
// Valor 2 = 12
// Valor 1 = 12
// Valor 2 = 3

value1 = 3
value2 = 12
console.log(value1)
console.log(value2)

value3 = value1
value1 = value2
value2 = value3
console.log(value1)
console.log(value2)

// 2 - Dado o array [‘C’, ‘B’, ‘A’], troque os valores das posições 0 e 2 e imprima o array final no console.
// Saída Esperada:
// [‘A’, ‘B’, ‘C’]

array = ['C', 'B', 'A']
arrayAux = [array[2], array[1], array[0]]

console.log(arrayAux)

arrayA = array[0]
array[0] = array[2]
array[2] = arrayA

console.log(array)

// 3 - Faça uma função que recebe como argumento um array com dois valores numéricos e deve retornar o array ordenado de forma ordem crescente. Imprima no console o array final.
// Exemplo Entrada 1:
// [5, 8]

// Exemplo Saída 1:
// [5, 8]

// Exemplo Entrada 2:
// [19, 2]

// Exemplo Saída 2:
// [2, 19]

array2 = [5, 8]
array3 = [19, 2]

function orderArray2(arr) {
  if (arr[0] > arr[1]) {
    let aux = arr[0]
    arr[0] = arr[1]
    arr[1] = aux
  }

  return arr //array ordenado
}

console.log(orderArray2(array2))
console.log(orderArray2(array3))

//   for (let i = 0; i < 2; i++) {
//     if (a[i] > a[i++]) {
//       a[i++] = a[i]
//       a[i] = a[i++]
//     }
//   }
//   console.log(a)
// }

// console.log(array2)
// console.log(orderArray2(array2))
// console.log(array3)
// console.log(orderArray2(array3))

// 4 - Faça um algoritmo que percorre um array e imprime o menor valor.
// Exemplo Entrada 1:
// [5, 8, 13, 1, 7]

// Exemplo Saída 1:
// O menor valor é 1

// Exemplo Entrada 2:
// [23, -99, -10, 5, 60]

// Exemplo Saída 1:
// O menor valor é -99

array4 = [5, 8, 13, 1, 7]

array5 = [23, -99, -10, 5, 60]

function order2(arr) {
  let auxiliar
  let menor = -99
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= menor) {
      auxiliar = arr[i]
    }
  }
  console.log(auxiliar)
}

order2(array5)
