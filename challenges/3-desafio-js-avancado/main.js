/* 
1- Criar um projeto JS dividido em módulos (main.js,data.json,formatters.js,math.js) ok 
a) o arquivo main.js vai possuir um algorítmo que importa o objeto do arquivo data.json (contém uma lista de clientes e uma lista de compras) e 



vai imprimir para cada cliente seus dados, suas compras ordenadas por data e o total em compras.


As funções que forem de formatação como a impressão dos dados do cliente e impressão dos dados da compra devem estar no arquivo formatters.js e a função cálculo total do cliente deve estar no arquivo math.js.

O algorítmo principal deve rodar no main.js
(O foco é a modularização e organização do projeto)
A execução deve ocorrer com o comando node --experimental-json-modules main.js

data.json



Saída esperada:



Cliente: 1 - Érico

Compra em 11/04/2021 no total de R$ 100,00.

Compra em 20/04/2021 no total de R$ 329,99.

Total do cliente: R$ 429,99.



Cliente: 2 - Juca

Compra em 08/02/2021 no total de R$ 52,48.

Compra em 11/03/2021 no total de R$ 83,71.

Total do cliente: R$ 136,19.
*/






 
let dataJson = require('./data.json');
// console.log(dataJson)


// {
//     "clientes":[
//         {"id":1, "name": "Érico"},
//         {"id":2, "name": "Juca"}
//     ],
//     "purchases":[
//         {"client_id":1 , "data":"11/04/2021", "total": 100.0},
//         {"client_id":2 , "data": "11/03/2021", "total": 83.71},
//         {"client_id":2 , "data": "08/02/2021", "total": 52.48},
//         {"client_id":1 , "data": "20/04/2021", "total": 329.99}
//         ]
// }

let copyJson = {...dataJson}

// copyJson.purchases.forEach((elem)=>{
// elem.data = new Date((`${elem.data.slice(-4)},${elem.data.slice(-7,-5)},${elem.data.slice(0,2)}`))
// })

// console.log(copyJson.purchases) 


// let ordenedCopyJson = (copyJson.purchases).sort((a,b)=>{
//     return a.data - b.data
// })

// console.log(ordenedCopyJson)



let a=dataJson.purchases.reduce((acc,elem)=>{
    if(elem.client_id===1){
        console.log(`Cliente: ${dataJson.clientes[0].id} - ${dataJson.clientes[0].name}`)
    }else{
        console.log(`Cliente: ${dataJson.clientes[1].id} - ${dataJson.clientes[1].name}`)
    }

    },{}) 

console.log(a)