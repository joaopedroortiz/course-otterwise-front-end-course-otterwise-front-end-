//forEach

const array = [1, 3, 5, 6, 7, 8]

array.forEach((value) => console.log(value * 10))

array.forEach((elem, i, originalArray) => console.log(`${i}: ${elem}`, array))

//map retorna um novo array com os elementos modificados ou mapeados

const array1 = [4, 8, 13, 54, 87]

const mappedArray = array1.map((elem) => {
  return `R$ ${elem.toFixed(2) * 10}`
})

console.log(mappedArray)

//find retorna o primeiro elemento buscado e se não encontrar retorna false

const array2 = [5, 15, -3, 54, -10]

const findElem = array2.find((elem) => {
  return elem < 0
})
console.log(findElem)

const findElemPos = array2.find((elem) => {
  return elem > 100
})
console.log(findElemPos)

//filter cria um novo array com todos os elementos do array original que atendam a condição

const array3 = [
  { name: 'joao', age: 25 },
  { name: 'ygor', age: 21 },
  { name: 'fabi', age: 31 },
]
const filterArray = array3.filter((elem) => {
  return elem.age < 25
})

console.log(filterArray)

//some retorna um boleano sobre se existe ou não algum elemento que satisfaça a condição, diferentemente do find que traz o elemento ou undefined

const someElem = array3.some((elem) => elem.age < 25)
console.log(someElem)

// every informa em boleano se todos os elementos satisfazem a condição.

const array2 = [5, 15, -3, 54, -10]

const array3 = [
  { name: 'joao', age: 25 },
  { name: 'ygor', age: 21 },
  { name: 'fabi', age: 31 },
]

const everyThan = array2.every((elem) => {
  return elem > 0
})

const everyAge = array3.every((elem) => {
  return elem.age > 18
})
console.log(everyThan)
console.log(everyAge)

//sort define a precedência entre dois elementos de um array. Alternando o array original. Retornos: a) numero negativo - o primeiro numero da comparação deve aparecer antes na ordenação. b) numero positivo - o primeiro elemento da comparaão deve aparecer depois na ordenação. c) zero caso os números não tenham diferença de precedência.

//const array2 = [5, 15, -3, 54, -10]

const sortArray = array2.sort((a, b) => {
  if (a - b < 0) return -1
  if (a - b > 0) return 1
  return 0
})

console.log(sortArray)

// reduce reduz os termos do array com uma operação

const array2 = [5, 15, -3, 54, -10]

const soma = array2.reduce((acc, elem) => {
  return acc + elem
})
console.log(soma)

const soma = array2.reduce(
  (acc, elem) => {
    console.log('acc', acc)

    if (elem < 0) {
      acc.negativos.push(elem)
    } else {
      acc.positivos.push(elem)
    }
    return acc
  },
  {
    negativos: [],
    positivos: [],
  }
)
console.log(soma)
