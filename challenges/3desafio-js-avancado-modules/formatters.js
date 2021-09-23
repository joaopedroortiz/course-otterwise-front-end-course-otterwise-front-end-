import { format, compareAsc } from 'date-fns'
import { soma } from './math.js'


export function dateChanger(argumento){
    argumento.map((elem)=>{
    elem.data = new Date((`${elem.data.slice(-4)},${elem.data.slice(-7,-5)},${elem.data.slice(0,2)}`))
    })
    return argumento
}

            
export function sortDates(argumento){
    argumento.sort((a,b)=>a.data - b.data)
    return argumento
}



export function backBRdate(argumento){
    let backedBR = argumento.map((elem)=>({...elem, data: format(new Date(elem.data), 'dd/MM/yyyy')}))
    return backedBR
}

export function imprime(shopper){
    console.log(`
    Cliente: ${shopper.id} - ${shopper.name}
    `)

    shopper.contas.forEach(element => {
        console.log(`Compra em ${element.data} no total de R$ ${element.total}
        `)
    });
     
    console.log(`Total do cliente:${soma( shopper.contas )}
    
    -------------------------------------------------------------------------`)

}