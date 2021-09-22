/*1-instale o npm ok
2-instale o yarn ok
3-configure o projeto pelo yarn ok
4-adicione ao projeto o date-fns ok
5-crie uma função chamada formateDate que transforma a data de mm/dd/yyy para dd/mm/yyyy
6-o arquivo deve exportar a função formateDate 
7-crie um arquivo index.js ok 
8-nesse arquivo importe a formateDate do modulo formatters.js
9-imprima no console o resultado da função formateDate com o argumento do dia de hoje*/

import { format, compareAsc } from 'date-fns'

//format(new Date(2014, 1, 11), 'MM/dd/yyyy') ano mes dia 

function formateDate(date){
return format(date, 'MM/dd/yyyy')
//return format(new Date(date), 'MM/dd/yyyy')
}

export default formateDate

// console.log(format(new Date(1996,10,30),'dd/MM/yyyy')) //funcionou 