//crie uma arrow function e atribua ela à uma constante chamada imprime. Essa função recebe um argumento e imprime ele no console.

// let imprime = (a) => console.log(a)
// imprime()

//crie uma função anonima e atribua ela à uma constante chamda executeOnArray. Essa função possui doi parâmetros: um array de números e uma função. A função executeOnArray executa a função que recebeu o como segundo arquimento em cada um dos elementos. A definição da função argumento é de sua Escolha

// let array1 = [1, 2, 3, 4, 5, 6, 7]

// const executeOnArray = function (a, b) {
//   for (i = 0; i < b.length; i++) {
//     a(b[i])
//   }
// }

// executeOnArray(imprime, array1)

//cria uma função calculate que recebe um argumento e retorna uma função.  O argumento recebido sera uma das opções: "soma","multiplica","divide". A função deve retornar uma função que recebe dois argumentos e retornar o resultado da operação (definida pela string) entre dois numeros. Imprima uma vaz com cada operação

// const obj = [
//   { soma: (a, b) => a + b },
//   { subt: (a, b) => a - b },
//   { divi: (a, b) => a / b },
//   { multi: (a, b) => a * b },
// ]

// function calculate(value,a,b) {
//     switch (value) {
//         case "soma":
//             return (a, b) > a + b
//         case "subtração":
//             return (a, b) => a - b
//         case "divisão":
//             return (a, b) => a / b
//         case "multiplicação":
//             (a, b) => a * b
//     break;
//     }

//     console.log(obj.name[op])
// }

// function calculate(op,n1,n2){
//     obj[a]
// }

// }

// ATENÇÃO: Para esses exercícios tente utilizar ao máximo os conteúdos trabalhados na aula 13 - JS Avançado 03

// 1 -  Crie uma arrow function que imprime a quantidade de ocorrências de uma letra em uma palavra.
// Exemplo entrada:
// letra: f
//  E

const contaLetra = (letra, palavra) => {
  let qt = 0
  for (i = 0; i < palavra.length; i++) {
    if (palavra[i].toLocaleLowerCase() === letra.toLocaleLowerCase()) qt++
  }
  console.log(qt)
}
contaLetra('f', 'Formação front-end da Otterwise')

// Exemplo saída:
// 2

// 2 - Crie uma High-Order Function chamada lessThan que possui um argumento numérico e retorna uma função que por sua vez tem um argumento numérico, também, e retorna se o seu argumento é menor que o argumento de lessThan.

// Exemplo chamada 1:
// lessThan(10)(5) => true

// Exemplo chamada 2:
// lessThan(1)(5) => false




// 3 - Crie um array de com 4 elementos, sendo cada um deles uma função que recebe 2 argumentos e retorna a operação deles (soma, multiplicação, subtração e divisão). Percorra esse array e gere um novo array, onde cada elemento será o resultado da operação entre dois números que serão dados como entrada, imprima no console o novo array.
// Exemplo entrada:
// num1 = 10
// num2 = 5

// Exemplo saída:
// [15, 50, 5, 2]
