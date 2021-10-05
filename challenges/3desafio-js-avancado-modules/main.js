import data from "./data.json";
import { dateChanger, sortDates, backBRdate, imprime } from "./formatters.js";

let newClientes = [...data.clientes]; //Cria uma variável somente com os objetos clientes
let newPurchases = [...data.purchases]; //Cria uma variável somente com os objetos purchases

let purchase1 = newPurchases.filter((elem) => {
  return elem.client_id === 1;
}); //Filtra somente as purchases do cliente 1

let purchase2 = newPurchases.filter((elem) => {
  return elem.client_id === 2;
}); //Filtra somente as purchases do cliente 2

dateChanger(purchase1);
dateChanger(purchase2); // Transforma as datas dd/mm/yyy para classe Date()

sortDates(purchase1);
sortDates(purchase2); // Organiza as purchases em ordem crescente de acordo com o Date()

let backToBRformat1 = backBRdate(purchase1); // Variáveis recebem os purchases com as datas ordenadas e agora formatadas para dd/mm/yyy
let backToBRformat2 = backBRdate(purchase2);

let cliente1 = { ...newClientes[0], contas: backToBRformat1 };
let cliente2 = { ...newClientes[1], contas: backToBRformat2 };

imprime(cliente1);
imprime(cliente2);
