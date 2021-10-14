// Campos do formulário e botão
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const phone = document.querySelector("#phone");
const button = document.querySelector("#button");

// Aviso status do submit
const warning = document.querySelector("#warning");

// Labels
const nameLabel = document.getElementById("name-label");
const emailLabel = document.getElementById("email-label");
const messageLabel = document.getElementById("message-label");
const phoneLabel = document.getElementById("phone-label");

// Criação do evento click
button.addEventListener("click", sendJson);

async function sendJson() {
  const body = {
    name: nome.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  //status de cada input
  nome.value == ""
    ? (nameLabel.style.color = "red")
    : (nameLabel.style.color = "black");

  email.value == ""
    ? (emailLabel.style.color = "red")
    : (emailLabel.style.color = "black");

  message.value == ""
    ? (messageLabel.style.color = "red")
    : (messageLabel.style.color = "black");

  phone.value == ""
    ? (phoneLabel.style.color = "red")
    : (phoneLabel.style.color = "black");

  //Condição de envio das informações caso todos campos estejam preenchidos
  if (nome.value && email.value && phone.value && message.value) {
    const response = await fetch(
      "https://otterwise-fake-api.herokuapp.com/contact",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    if (data.type == "Sucesso") {
      nome.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
      warning.innerText = `Dados enviados com sucessso!`;
    } else if (data.type) {
      warning.innerText = `Erro, por favor tente novamente mais tarde.`;
      console.log();
    }
    console.log(data);
  } else {
    warning.innerText = "Dados incompletos.";
  }
}
