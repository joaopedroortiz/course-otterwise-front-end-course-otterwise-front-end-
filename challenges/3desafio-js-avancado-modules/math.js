export function soma(arg){
   
    let argsoma = arg.reduce((acc, elem)=>{
    return acc + elem.total
    },0)
    return argsoma
}
