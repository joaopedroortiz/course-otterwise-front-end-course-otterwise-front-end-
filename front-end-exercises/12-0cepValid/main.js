import conif  from'node-console-input';
import fetch from 'node-fetch';
 
let informeCep = conif.getConsoleInput("Digite seu cep: ");


async function solicitaCep(cep){

    try{
    const response = await fetch(`http://viacep.com.br/ws/${cep.replace(/\D/g,'')}/json/`);
    const data = await response.json();
        if(!data.logradouro || !data.localidade || !data.uf){
            console.log("Há algum erro no CEP informado, tente novamente.")
            return
        }
        console.log(`Logradou: ${data.logradouro}, Cidade: ${data.localidade}, UF:${data.uf} `);
    }catch{   
    console.log("Há algum erro no CEP informado, tente novamente.")
 }

}

solicitaCep(informeCep)

