// 1 -

const colaboradores = [
  { name: 'Juca', idade: 25, cargo: 'front-end' },
  { name: 'Márcia', idade: 23, cargo: 'back-end' },
  { name: 'Vitória', idade: 28, cargo: 'designer' },
  { name: 'Fernando', idade: 19, cargo: 'estagiário' },
  { name: 'Fabiane', idade: 25, cargo: 'back-end' },
  { name: 'Jéssica', idade: 23, cargo: 'front-end' },
]

//a) Crie e imprima um objeto que possui a quantidade de colaboradores em cada cargo.
//Saida esperada {"front-end":2, "back-end":2, "designer":1, "estagiário":1}.

console.log('Exercício 1a')

let colNumbers = colaboradores.reduce((acc, elem) => {
  acc[elem.cargo] = 0
  return acc
}, {})

colaboradores.map((elem) => {
  if (elem.cargo === 'front-end') {
    return colNumbers['front-end']++
  } else if (elem.cargo === 'back-end') {
    return colNumbers['back-end']++
  } else if (elem.cargo === 'designer') {
    return colNumbers['designer']++
  } else if (elem.cargo === 'estagiário') {
    return colNumbers['estagiário']++
  }
})

console.log(colNumbers)

console.log(`
----------------------------------------------------------
`)

//b)Imprima no console o array colaboradores ordenado por idade de forma decrescente

console.log('Exercício 1b')

let idadesCol = colaboradores.sort((a, b) => b.idade - a.idade)

console.log(idadesCol)

console.log(`
----------------------------------------------------------
`)
// c)Imprima no console o array colaboradores ordenado por cargo , sendo a ordem: estagiario, front, back, designer.

console.log('Exercício 1c')

const order = { estagiário: 0, 'front-end': 1, 'back-end': 2, designer: 3 }
const ordenedColab = colaboradores.sort(
  (a, b) => order[a.cargo] - order[b.cargo]
)
console.log(ordenedColab)

console.log(`
----------------------------------------------------------
`)
// d)Imprima no console o array colaboradores ordenado por idade de forma crescente e em caso de empate, o desempate deve ser feito na ordem de cargos anterior

console.log('Exercício 1d')

let ageColab = colaboradores.sort((a, b) => {
  if (a.idade === b.idade) {
    const order = { estagiário: 0, 'front-end': 1, 'back-end': 2, designer: 3 }
    return order[a.cargo] - order[b.cargo]
  } else {
    return a.idade - b.idade
  }
})

console.log(ageColab)

console.log(`
----------------------------------------------------------
`)

//------------------------------------------------------------------------------

//2 - Utilizando o array installments, que representa parcelas, realize os sequintes exercícios:

const installments = [
  { installment_number: 1, value: 123.45, status: 'Pago' },
  { installment_number: 2, value: 139.88, status: 'Pago' },
  { installment_number: 3, value: 123.45, status: 'Pago' },
  { installment_number: 4, value: 182.37, status: 'Aberto' },
  { installment_number: 5, value: 133.93, status: 'Aberto' },
]

// a) Imprima no console o valor total das parcelas:

console.log('Exercício 2a')

let totalValue = installments.reduce((acc, total) => {
  acc = acc + total.value

  return acc
}, 0)
console.log(`O valor total das parcelas é ${totalValue.toFixed(2)}`)

console.log(`
----------------------------------------------------------
`)

// b) Crie e imprima no console um objeto que possui o valor total em aberto e o valor total ja pago.
// Saída esperada {total_paid:386.78, total_open:316.3}.

console.log('Exercício 2b')

let total_paid = installments
  .filter((elem) => {
    return elem.status == 'Pago'
  })
  .reduce((acc, elem) => {
    return (acc = acc + elem.value)
  }, 0)

let total_open = installments
  .filter((elem) => {
    return elem.status == 'Aberto'
  })
  .reduce((acc, elem) => {
    return (acc = acc + elem.value)
  }, 0)

let payments = { total_paid: total_paid, total_open: total_open }
console.log(payments)

console.log(`
----------------------------------------------------------
`)

//c)Imprima no console o array de parcelas ordenado por valor de forma decrescente.

console.log('Exercício 2c')

const orderDecres = installments.sort((a, b) => b.value - a.value)
console.log(orderDecres)

console.log(`
----------------------------------------------------------
`)

//d)Imprima no console o array de parcelas ordenado por valor de forma crescente e, em caso de empate, o desempate deve ocorrer pelo número da parcela de forma decrescente.

console.log('Exercício 2d')

const orderCres = installments.sort((a, b) => {
  if (b.value === a.value) {
    return b.installment_number - a.installment_number
  } else {
    return a.value - b.value
  }
})
console.log(orderCres)

console.log(`
----------------------------------------------------------
`)
