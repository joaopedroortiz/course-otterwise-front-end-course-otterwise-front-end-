// function checkZero(x) {
//   boleano = Boolean(x)
//     function bol1(boleano) {
//       boleano && true
//       return 'o numero não é zero'
//     }

//     function bol2(boleano) {
//       boleano && false
//       return 'o numero é zero'
//     }

//   //   console.log(`o número ${x} ${Boolean(x)} zero`)
// }

// - Crie uma função que recebe como argumento uma string e modifica seus elementos colocando-os em caixa alta (letras maiúsculas).

function caps(a) {
  return console.log(a.toUpperCase())
}

caps('joao')

// 2 - Crie uma função que recebe como argumento um número e retorna sua forma monetária em reais.
// Exemplo entrada:
// 12.99

function dinheiro(a) {
  return console.log(`R$ ${a.toFixed(2)}`)
}

dinheiro(12)
// Exemplo saída:
// R$ 12,99

// 3 - Crie uma função que recebe como argumento uma string e coloca em caixa alta todas as letras ‘e’.
// Exemplo entrada:
// Formação front-end da Otterwise.

function capsE(a) {
  return console.log(a.replace(/e/g, 'E'))
}

capsE('Formação Fronte end Otterwise')

// Exemplo saída:
// Formação front-End da OttErwisE.

// 4 - Crie um algoritmo que imprima todos os valores divisíveis por 5 em um array.
// Exemplo de entrada:
array = [1, 5, 8, 90, 23, 7, 50, 15, 13, 25, 81]
yguinho = [1, 99, 7582, 7 * 7896, 789652, 5, 80]
// Exemplo de saída:
// 5
// 90
// 50
// 15

function mp5(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 5 == 0) {
      console.log(a[i])
    }
  }
}

mp5(array)
console.log('---------yguinho------')
mp5(yguinho)

// 5 - Crie uma função que recebe uma frase (string) e uma palavra (string) e imprime no console se esta palavra está na frase.
// Exemplo de entrada 1:
let frase1 = 'Formação front-end da Otterwise'
// buscar otterwise

// Exemplo saída 1:
// otterwise está na frase!

// Exemplo de entrada 2:
let frase2 = 'Beber água é muito importante para a saúde'
// buscar refrigerante

// Exemplo saída 2:
// refrigerante não está na frase!
// E aí pessoal, hoje (30/08) teremos aula de reforço às 20:15, no mesmo link da aula das 18h. O assunto tratado será Object.

function find(frase, palavra) {
  console.log(frase)

  if (frase.toLowerCase().includes(palavra.toLowerCase())) {
    console.log(`Palavra encontrada: ${palavra}`)
  } else {
    console.log(` A palavra ${palavra} não esta na frase`)
  }
}

find(frase1, 'otterwise')
find(frase2, 'refrigerante')
