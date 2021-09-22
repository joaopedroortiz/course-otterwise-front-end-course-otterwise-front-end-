let pessoa = [
  { nome: 'João', idade: 28, cargo: 'Front' },
  { nome: 'Pedro', idade: 26, cargo: 'Back' },
  { nome: 'Igor', idade: 23, cargo: 'Devops' },
  { nome: 'Fabi', idade: 20, cargo: 'Designer' },
  { nome: 'Mari', idade: 32, cargo: 'RH' },
]

function orderUser(arr) {
  let menor
  for (let i = 0; i < arr.length - 1; i++) {
    menor = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].idade < arr[menor].idade) {
        menor = j
      }
    }
    if (i != menor) {
      ;[arr[i], arr[menor]] = [arr[menor], arr[i]]
    }
  }
  return arr
}
orderUser(pessoa)
console.log(pessoa)
