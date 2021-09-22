import formateDate from "./formateDate.js";

const data2014 = new Date("2014, 1, 11")

const bornDate = new Date("1996,11,30")

const today = new Date()

console.log(formateDate(bornDate))
console.log(formateDate(data2014))
console.log(formateDate(today))

