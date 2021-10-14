import React from "react";
import "../index.css";

function Form() {
  return (
    <div className="formulario">
      <input type="text" name="" id="" placeholder="Nome" />
      <input type="email" name="" id="" placeholder="Email" />
      <input type="date" name="" id="" placeholder="Data de Nascimento" />

      <input type="submit" value="Enviar" />
    </div>
  );
}

export default Form;
