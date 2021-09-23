import { format, compareAsc, closestIndexTo } from 'date-fns'

// import closestIndexTo from 'date-fns'

  const users = [
  {
    nome: 'Roberto Bruno Noah Ramos',
    data_nasc: '04/01/1953',
  },
  {
    nome: 'Manoel Bento Davi Bernardes',
    data_nasc: '16/11/2000',
  },
  {
    nome: 'Vanessa Catarina Isabel Moura',
    data_nasc: '03/03/1971',
  },
  {
    nome: 'Renan Anderson Raul de Paula',
    data_nasc: '10/01/1993',
  },
  {
    nome: 'Vicente Geraldo Thales Brito',
    data_nasc: '10/09/2003',
  },
  {
    nome: 'Isabelly Allana Freitas',
    data_nasc: '21/11/1972',
  },
  {
    nome: 'Melissa Bianca Jéssica Freitas',
    data_nasc: '14/09/1979',
  },
  {
    nome: 'César Thiago Bento Moreira',
    data_nasc: '25/10/1951',
  },
  {
    nome: 'João Benício Peixoto',
    data_nasc: '25/10/1961',
  }
]

// 1 - Crie um algoritmo que imprime no console um array de objetos usuários ordenado por data de aniversário de forma crescente.


users.forEach((elem)=>{
  elem.data_nasc = new Date((`${elem.data_nasc.slice(-4)},${elem.data_nasc.slice(-7,-5)},${elem.data_nasc.slice(0,2)}`))
})
let copyUsers = [...users]

let orderDates= users.sort((a,b)=>{
return a.data_nasc - b.data_nasc

})



orderDates.forEach((elem)=>{
return elem.data_nasc= format(new Date(elem.data_nasc), 'dd/MM/yyyy') //forma é da biblioteca date-fns, transforma a data do formado EUA pra BR

})
console.log("Array ordenado por datas de nascimento: ")
console.log(orderDates)
// console.log(`
// ------------------------------------------------------------
// `)
// console.log("Array original :")
// console.log(copyUsers)


// // 2 - Crie um algoritmo que imprime no console o próximo aniversariante.

// users.forEach((elem)=>{
//   elem.data_nasc = new Date((`${elem.data_nasc.slice(-4)},${elem.data_nasc.slice(-7,-5)},${elem.data_nasc.slice(0,2)}`))
// })

// const dates= users.map((elem)=>{
// return elem.data_nasc

// })
// var dateToCompare = new Date()
// var result = closestIndexTo(dateToCompare, dates)

// let proxAniversario = users.find((elem)=>{
//   elem.data_nasc === dates[result]
//   return elem
//   }) 

// console.log(`
// ---------------------------------------------------------------

// O próximo aniversariante da lista é ${proxAniversario.nome}`
// )

