function checkSignal(n) {
  if (n < 0) {
    console.log('o numero ' + n + ' é negativo')
  } else if (n > 0) {
    console.log(`o numero ${n} é positivo`)
  } else {
    console.log('O número zero é neutro.')
  }
}

checkSignal(-99)
checkSignal(42)

function double(n) {
  console.log(n * 2)
}

double(5)

function calc(x, y, z) {
  if (x == 'soma') {
    return y + z
  } else if (x == 'subtrai') {
    return y - z
  } else if (x == 'multiplica') {
    return y * z
  } else if (x == 'divide') {
    return y / z
  }
}

console.log(calc('soma', 2, 16))
console.log(calc('subtrai', 2, 16))
console.log(calc('multiplica', 2, 16))
console.log(calc('divide', 2, 16))
/*const y = 2
const z = 16
console.log(`A soma de ${y} e ${z} é: ${calc('soma', 2, 16)}`)
console.log(`A subtração entre ${y} e ${z} é ${calc('subtrai', 2, 16)}`)
console.log(`A multiplicação entre ${y} e ${z} é ${calc('multiplica', 2, 16)}`)
console.log(`A divide entre ${y} e ${z} é ${calc('divide', 2, 16)}`)*/
const aluno = 'João'
const responsavel = 'Rose'
const idade = 18
const prova1 = 10
const prova2 = 8
const prova3 = 7

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3
}

let med = media(prova1, prova2, prova3)

function status() {
  if (med >= 6) {
    console.log('Aprovado sem exame.')
  } else if (med < 6 && med >= 4) {
    console.log('Aluno em exame.')
  } else if (med < 4) {
    console.log('Aluno reprovado sem possibilidade de exame.')
  }
}

function maior() {
  if (idade >= 18 && med >= 6) {
    console.log(`${aluno}, você está aprovado.`)
  } else if (idade < 18 && med >= 6) {
    console.log(`${responsavel}, seu filho João foi aprovado.`)
  } else if (idade >= 18 && med < 6) {
    console.log(`${aluno}, você foi foi reprovado.`)
  } else if (idade < 18 && med < 6) {
    console.log(`${responsavel}, seu filho João foi reprovado.`)
  }
}

maior()
status()
console.log('Sua média é: ' + med + '.')
console.log(`Sua média é ${med}.`)
