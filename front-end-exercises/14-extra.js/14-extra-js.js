// 1 - Faça um programa que armazene em duas letiáveis distintas, um nome e um sobrenome, e imprima no console o nome completo.
const conif = require('node-console-input');

// let name1 = conif.getConsoleInput("primeiro nome:");

// let name2 = conif.getConsoleInput("sobrenome:");

// console.log(`${name1} ${name2}`)


// 2 - Calcule a média de consumo de combustível utilizada em uma viagem e o tempo levado durante a viagem. Você deve imprimir no console esses dois valores:



// let dist = conif.getConsoleInput("Qual distância percorrida?");
// let vel = conif.getConsoleInput("Velocidade?");
// let fuel = conif.getConsoleInput("Quantidade de combustível gasto em litros?");


// console.log(`O consumo médio de combustível por litro durante a viagem: ${dist/fuel} km/l`)
// console.log(`Tempo da viagem: ${(dist/vel).toFixed(2)} horas`)




// 3 - Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por mês e uma comissão de acordo com o valor de vendas realizado por elas. Faça um programa que calcule e imprima no console o valor total recebido pela pessoa corretora de imóveis no mês.



// let salario = conif.getConsoleInput("salario:");
// let vendas = conif.getConsoleInput("valor em vendas:");
// let comissao = conif.getConsoleInput("porcentagem da comissão:");

// console.log(`Valor mensal: R$ ${Number(salario) + ((Number(comissao)/100)*Number(vendas))}`)

// 4 - Tendo como informações um nome e uma idade, faça um programa que imprima no console se a pessoa é maior ou menor de idade.

// let nome = conif.getConsoleInput("nome:");
// let idade = conif.getConsoleInput("idade:");
// let maior = ""
// if(idade<18){
//     maior = "menor de idade"
// }else{
//     maior = "maior de idade"
// }
// console.log(`${nome} tem ${idade} anos e é ${maior}`)

// 5 - Tendo como informação um número, faça um programa que imprime no console se esse número é par ou ímpar. 

// let number = conif.getConsoleInput("Insira um número:");
// if(number%2==0){
//     console.log(`o número ${number} é par`)
// }else{
//     console.log(`o número é impar`)
// }

// 6 - Tendo como informação os três lados de um triângulo faça um programa que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.

// let lado1 = conif.getConsoleInput("Tamanho do lado 1:");
// let lado2 = conif.getConsoleInput("Tamanho do lado 2:");
// let lado3 = conif.getConsoleInput("Tamando do lado 3:");

// if(lado1 == lado2 == lado3) {
//     console.log(`O triangulo é equilátero`)
// }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
//     console.log(`O triangulo é isósceles`)
// }else{
//     console.log(`o trinagulo é escaleno`)
// }


// 7 - Tendo como informação dois números, faça um programa que imprima na tela qual deles é o maior e qual deles é o menor. Caso os números sejam iguais, informe que eles são iguais.

// let number1 = Number(conif.getConsoleInput("numero 1:"));

// let number2 = Number(conif.getConsoleInput("numero 2:"));

// if(number1>number2){
//     console.log(`${number1} é maior que ${number2}`)
// }else if(number1<number2){
//     console.log(`${number1} é menor que ${number2}`)
// }else if(number1==number2){console.log("os numeros são iguais")}

// Os valores de entrada serão:

// Número 1;
// Número 2;


// Exemplo de Entrada: 

// 2

// 5

// -----------------

// 7

// 7



// Exemplo de Saída:

// 5 é maior que 2

// -----------------

// 7 é igual a 7



// 8 - Imprima no console os valores de 1 até 50.


// Exemplo de Saída:

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50.



// 9 - Imprima no console os valores de 100 até 200 de 10 em 10.


// Exemplo de Saída:

// 10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200.



// 10 - Dado um número, imprima no console a soma de todos os números de 1 até o número escolhido. Ex: Ao ter como entrada o valor 5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).


// Os valores de entrada serão:

// Número;


// Exemplo de Entrada: 

// 10

// -----------------

// 3



// Exemplo de Saída:

// 55

// -----------------

// 6



// 11 - Dado um array de nomes, faça um programa que imprima na tela todos os nomes (na mesma linha). 


// Os valores de entrada serão:

// Array;


// Exemplo de Entrada: 

// [`Angela`, `Rosa`, `Ticiana`, `Carla`, `Renata`]



// Exemplo de Saída:

// Angela, Rosa, Ticiana, Carla, Renata



// 12 - Dado um array de números, faça um programa que imprima na tela somente os números positivos. 


// Os valores de entrada serão:

// Array;


// Exemplo de Entrada: 

// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

// -----------------

// [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]



// Exemplo de Saída:

// 1 25 13 10 52 

// -----------------

// 32 28 65 22 255



// 13 - Dado o array de objetos abaixo, faça um programa que calcule a média aritmética dos estudantes e imprima no console uma lista de alunos aprovados. A média de aprovação é 7.0. 


// Os valores de entrada serão:

// Array de Objetos;


// Exemplo de Entrada: 

// [

// {nome: `Marcos`, notas: [10, 7, 2]},

// {nome: `Michele` ,notas: [10, 10, 10]},

// {nome: `Pedro`, notas: [3, 10, 9]},

// {nome: `Andressa`, notas: [6, 6, 8]},

// {nome: `Cristiana` , notas: [7, 9, 2]}

// ]



// Exemplo de Saída:

// Michele

// Pedro



// 14 - Uma agência de pesquisas urbanas precisa de um sistema que facilite seu o fluxo de trabalho. A agência trabalha com uma grande quantidade de dados, então busca o melhor desempenho para seu sistema. Segue a lista de algoritmos que devem ser desenvolvidos:  


// //Dados de Entrada:

// const cidades = [

//   { ibge: 3509502, nome: "Campinas", uf: "SP", habitantes: 1213792, capital: false},

//   { ibge: 3518800, nome: "Guarulhos", uf: "SP", habitantes: 1392121, capital: false },

//   { ibge: 3548708, nome: "São Bernardo do Campo", uf: "SP", habitantes: 844483, capital: false },

//   { ibge: 3304557, nome: "Rio de Janeiro", uf: "RJ", habitantes: 6747815, capital: true  },

//   { ibge: 3300100, nome: "Angra dos Reis", uf: "RJ", habitantes: 207044, capital: false },

//   { ibge: 3301702, nome: "Duque de Caxias", uf: "RJ", habitantes: 924624, capital: false },

//   { ibge: 3304904, nome: "São Gonçalo", uf: "RJ", habitantes: 1091737, capital: false },

//   { ibge: 5300108, nome: "Brasília", uf: "DF", habitantes: 3055149, capital: true },

//   { ibge: 2927408, nome: "Salvador", uf: "BA", habitantes: 2886698, capital: true },

//   { ibge: 4305108, nome: "Caxias do Sul", uf: "RS", habitantes: 517451, capital: false  },

//   { ibge: 2933307, nome: "Vitória da Conquista", uf: "BA", habitantes: 341128, capital: false },

//   { ibge: 3550308, nome: "São Paulo", uf: "SP", habitantes: 12325232, capital: true },

//   { ibge: 2918407, nome: "Juazeiro", uf: "BA", habitantes: 218162, capital: false },

//   { ibge: 2910800, nome: "Feira de Santana", uf: "BA", habitantes: 619609, capital: false },

//   { ibge: 4314407, nome: "Pelotas", uf: "RS", habitantes: 343132, capital: false  },

//   { ibge: 4314902, nome: "Porto Alegre", uf: "RS", habitantes: 1488252, capital: true  },

//   { ibge: 4316907, nome: "Santa Maria", uf: "RS", habitantes: 283677, capital: false },

// ]



// 14.a - Função que retorna o nome da cidade através do seu código ibge.
// Exemplo entrada:

// 3550308



// Exemplo saída:

// São Paulo



// 14.b - Função para mostrar cidades de um determinado estado:


// Exemplo entrada:

// ‘RS’



// Exemplo saída:

// [

//   {ibge: 4305108, nome: 'Caxias do Sul', uf: 'RS', habitantes: 517451, capital: false},

//   {ibge: 4314407, nome: 'Pelotas', uf: 'RS', habitantes: 343132, capital: false},

//   {ibge: 4314902, nome: 'Porto Alegre', uf: 'RS', habitantes: 1488252, capital: true},

//   {ibge: 4316907, nome: 'Santa Maria', uf: 'RS', habitantes: 283677, capital: false}

// ]



// 14.c - Função que recebe uma lista de cidades e imprime seus nomes em ordem crescente. 


// Exemplo entrada:

// // Array de cidades do início do exercício



// Exemplo saída:

// [ 'Angra dos Reis', 'Brasília', 'Campinas', 'Caxias do Sul', 'Duque de Caxias', 'Feira de Santana', 'Guarulhos', 'Juazeiro', 'Pelotas', 'Porto Alegre', 'Rio de Janeiro', 'Salvador', 'Santa Maria', 'São Bernardo do Campo', 'São Gonçalo', 'São Paulo', 'Vitória da Conquista' ]



// 14.d - Função que recebe uma lista de cidades e retorna a cidade com o maior número de habitantes.


// Exemplo entrada:

// [

//   {ibge: 4305108, nome: 'Caxias do Sul', uf: 'RS', habitantes: 517451, capital: false},

//   {ibge: 4314407, nome: 'Pelotas', uf: 'RS', habitantes: 343132, capital: false},

//   {ibge: 4314902, nome: 'Porto Alegre', uf: 'RS', habitantes: 1488252, capital: true},

//   {ibge: 4316907, nome: 'Santa Maria', uf: 'RS', habitantes: 283677, capital: false}

// ]

// Exemplo saída:

//  {ibge: 4314902, nome: 'Porto Alegre', uf: 'RS', habitantes: 1488252, capital: true}



// 14.e - Função para retornar a listagem de capitais ordenada de forma crescente por quantidade de habitantes.


// Saída esperada:

// [

//   {ibge: 4314902, nome: 'Porto Alegre', uf: 'RS', habitantes: 1488252, capital: true},

//   {ibge: 2927408, nome: 'Salvador', uf: 'BA', habitantes: 2886698, capital: true},

//   {ibge: 5300108, nome: 'Brasília', uf: 'DF', habitantes: 3055149, capital: true},

//   {ibge: 3304557, nome: 'Rio de Janeiro', uf: 'RJ', habitantes: 6747815, capital: true},

//   {ibge: 3550308, nome: 'São Paulo', uf: 'SP', habitantes: 12325232, capital: true}

// ]



// 14.f - Função para retornar a informações da cidade com o maior número de habitantes de um determinado estado:


// Exemplo entrada:

// “BA”



// Exemplo Saída:

// {ibge: 2927408, nome: 'Salvador', uf: 'BA', habitantes: 2886698, capital: true}



// 14.g - Função para agrupar em um objeto dicionário todas as cidades do mesmo estado:


// Saída esperada:

// {

//   SP: [

//     {ibge: 3509502, nome: 'Campinas', uf: 'SP', habitantes: 1213792, capital: false},

//     {ibge: 3518800, nome: 'Guarulhos', uf: 'SP', habitantes: 1392121, capital: false},

//     {ibge: 3548708, nome: 'São Bernardo do Campo', uf: 'SP', habitantes: 844483, capital: false},

//     {ibge: 3550308, nome: 'São Paulo', uf: 'SP', habitantes: 12325232, capital: true}

//   ],

//   RJ: [

//     {ibge: 3304557, nome: 'Rio de Janeiro', uf: 'RJ', habitantes: 6747815, capital: true},

//     {ibge: 3300100, nome: 'Angra dos Reis', uf: 'RJ', habitantes: 207044, capital: false},

//     {ibge: 3301702, nome: 'Duque de Caxias', uf: 'RJ', habitantes: 924624, capital: false},

//     {ibge: 3304904, nome: 'São Gonçalo', uf: 'RJ', habitantes: 1091737, capital: false}

//   ],

//   DF: [

//     {ibge: 5300108, nome: 'Brasília', uf: 'DF', habitantes: 3055149, capital: true}

//   ],

//   BA: [

//     {ibge: 2927408, nome: 'Salvador', uf: 'BA', habitantes: 2886698, capital: true},

//     {ibge: 2933307, nome: 'Vitória da Conquista', uf: 'BA', habitantes: 341128, capital: false},

//     {ibge: 2918407, nome: 'Juazeiro', uf: 'BA', habitantes: 218162, capital: false},

//     {ibge: 2910800, nome: 'Feira de Santana', uf: 'BA', habitantes: 619609, capital: false}

//   ],

//   RS: [

//     {ibge: 4305108, nome: 'Caxias do Sul', uf: 'RS', habitantes: 517451, capital: false},

//     {ibge: 4314407, nome: 'Pelotas', uf: 'RS', habitantes: 343132, capital: false},

//     {ibge: 4314902, nome: 'Porto Alegre', uf: 'RS', habitantes: 1488252, capital: true},

//     {ibge: 4316907, nome: 'Santa Maria', uf: 'RS', habitantes: 283677, capital: false}

//   ]

// }



// 15 - Utilizando a função à seguir que retorna uma promise
// const consultaCep = cep => {

//   const timer = (Math.floor(Math.random() * 4) + 1) * 500

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {

//       const CEP_LENGTH = 8

//       const sanitazedCep = cep.replace(/\D/g, '') // Remove todos os símbolos não numéricos

//       sanitazedCep.length === CEP_LENGTH

//         ? resolve(`${cep} é um CEP válido`)

//         : reject(`${cep} não é um CEP válido`)

//     }, timer)

//   })

// }





// crie um algoritmo que chama a função consultaCep e imprime seu resultado no console. Este algoritmo deve ser capaz de tratar erros e sincronizar o código. Além disso deve ser testado com as seguintes entradas de CEP, no mínimo, ‘96413-000’, ‘96413000’, ‘6413000’, ‘964130000’.

