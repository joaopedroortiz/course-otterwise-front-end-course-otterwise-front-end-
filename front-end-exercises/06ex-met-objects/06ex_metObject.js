// 1 - Crie uma função que recebe um array de strings e retorna um novo array com os elementos passados para caixa alta, sem alterar o array original.
// Exemplo entrada:
let array1 = ['maçã', 'banana', 'laranja']
let array2 = array1.slice()

function caps(arr) {
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].toUpperCase())
  }
  return console.log(arr2)
}

caps(array2)
console.log(array1)

// Exemplo saída:
// ["MAÇÃ", "BANANA", "LARANJA"]

// 2 - Crie um algoritmo que tem como entrada um array numérico, separa os números positivo e os negativos em dois novos arrays e imprime eles no console.
// Exemplo entrada:
array3 = [6, -12, 9, 23, -1, -99, 100]

function sinal(arr) {
  array4 = []
  array5 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      array4.push(arr[i])
    } else {
      array5.push(arr[i])
    }
  }
  console.log(array4)
  console.log(array5)
}

sinal(array3)

// Exemplo saída:
// [6, 9, 23, 100]
// [-12, -1, -99]

// 3 - Dado o objeto {client_id: 5, vendor_id: 9, date: null, status: "pendente"} crie um algoritmo que imprime no console o resultado desse objeto como query parameter (somente com as propriedades com valores válidos).
// let objeto = {client_id: 5, vendor_id: 9, date: null, status: "pendente"}

// }

//Seg à Sex 09h às 10h (manhã) - 14h às 15h (tarde) - 17h às 18h (tarde).

let user = { name: 'Marília', age: 26, job: 'Dev' }
let valor = Object.values(user)
let prop = Object.keys(user)
for (let i = 0; i < valor.length; i++) {
  console.log(`o valor da propriedade ${prop[i]} é ${valor[i]}`)
}

//ex 2 aula

const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

function lista(arr) {
  let listaJob = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].job === 'Dev') {
      listaJob.push(`${arr[i].name} é dev. `)
    } else {
      listaJob.push(`${arr[i].name} não é dev.`)
    }
  }
  console.log(listaJob.join())
}

lista(users)

const busca = { client_id: 5, vendor_id: 9, date: null, status: 'pendente' }

const arrayObj = Object.entries(busca)
let query = []
for (let i = 0; i < arrayObj.length; i++) {
  let key = arrayObj[i][0]
  let value = arrayObj[i][1]
  if (arrayObj[i][1]) {
    query.push(`${key}=${value}`)
  }
}

console.log(query.join('&'))
// Saída esperada: "client_id=5&vendor_id=9&status=pendente"
