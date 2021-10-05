function soma(n1, n2) {
  return n1 + n2;
}

function subtração(n1, n2) {
  return n1 - n2;
}
function multiplicação(n1, n2) {
  return n1 * n2;
}
function divisão(n1, n2) {
  return n1 / n2;
}

function res() {
  let n1 = Number(document.querySelector("#n1").value);
  let n2 = Number(document.querySelector("#n2").value);
  let select = document.querySelector("#calc").value;
  let result = document.querySelector("#resultado");

  if (select == "soma") {
    result.innerText = soma(n1, n2);
  } else if (select == "divisão") {
    result.innerText = divisão(n1, n2);
  } else if (select == "multiplicação") {
    result.innerText = multiplicação(n1, n2);
  } else if (select == "subtração") {
    result.innerText = subtração(n1, n2);
  }
}
