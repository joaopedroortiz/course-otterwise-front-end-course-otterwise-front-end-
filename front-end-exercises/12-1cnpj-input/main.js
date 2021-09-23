import conif  from'node-console-input';
import fetch from 'node-fetch';
import {intervalToDuration} from 'date-fns'

let cnpj = conif.getConsoleInput("Digite o CNPJ da empresa, por favor:");

const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj.replace(/\D/g,'')}`);
const data = await response.json();

console.log(data);

let formatedDate = new Date(`${data.abertura.slice(-4)},${data.abertura.slice(-7,-5)},${data.abertura.slice(0,2)}`)
console.log(formatedDate)


let time = intervalToDuration({
    start: formatedDate,
    end: new Date()
})

console.log(time)
console.log(`O tempo de operação da empresa é ${time.years} anos e ${time.months} meses.`)


// console.log(`
// Qual informação deseja saber?

// 1. Razão Social e Nome Fantasia da empresa 
// 2. Atividades da empresa
// 3. Endereço da empresa
// 4. Situação da empresa
// 5. Tempo de operação da empresa
// 6. Sair`)

// let option = conif.getConsoleInput("Opcao:");

// console.log(new Date())


//const CocaCola = '45.997.418/0001-53'