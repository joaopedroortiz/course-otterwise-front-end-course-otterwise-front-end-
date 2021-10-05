import conif  from'node-console-input';
import fetch from 'node-fetch';
import {intervalToDuration} from 'date-fns'

let cnpj = conif.getConsoleInput("Digite o CNPJ da empresa, por favor:");

const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj.replace(/\D/g,'')}`);
const data = await response.json();

function question(){
    console.log('1. Razão Social e Nome Fantasia da empresa:')
    console.log('2. Atividades da empresa:')
    console.log('3. Endereço da empresa:')
    console.log('4. Situação da empresa:')
    console.log('5. Tempo de operação da empresa:')
    console.log('6. Sair.')
    let option = conif.getConsoleInput("Qual opcao desejada?:");
    return option
}

let returnOp = ""

while(returnOp!=="6"){
    returnOp = question()

   function execute(returnOp,data){
        if (returnOp === '1') console.log(`O nome da empresa é: ${data.nome}, e o nome fantasia é: ${data.fantasia}.`)
        if (returnOp === '2') {let {atividade_principal: [{ text }],atividades_secundarias: [{ text: texto }],} = data
        console.log(`A atividade principal da empresa é: ${text}, e as atividades secundárias são: ${texto}.`)}
        if (returnOp === '3') console.log(`A empresa fica localizada em: ${data.logradouro}, nº${data.numero}, ${data.bairro}, ${data.municipio}/${data.uf}, ${data.cep}.`)
        if (returnOp === '4') console.log(`A situação da empresa é: ${data.situacao}.`)
        if (returnOp === '5'){ 
        let time = intervalToDuration({
        start: new Date(`${data.abertura.slice(-4)},${data.abertura.slice(-7,-5)},${data.abertura.slice(0,2)}`),
        end: new Date()
        })
        console.log(`O tempo de operação da empresa é ${time.years} anos e ${time.months} meses.`)   
        } 
        if (returnOp === '6') console.log(`Obrigado, tchau.`) 
        if (returnOp <1 || returnOp>6) console.log(`Opção inválida, tente novamente. `)
        }

execute(returnOp,data)
    
}
//const CocaCola = '45.997.418/0001-53'