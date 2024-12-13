import React from "react";

import "./styles.css";

const ContactPage = () => {
  return (
    <div className="container__contactPage" id="contact">
      <h1>Contato</h1>
      <form className="row input-container">
        <div className="styled-input wide">
          <input type="text" />
          <label for="name">Nome</label>
        </div>
        <div className="styled-input wide">
          <input type="email" />
          <label for="email">E-mail</label>
        </div>
        <div className="styled-input wide">
          <input type="text" />
          <label>Telefone</label>
        </div>
        <div className="styled-input wide">
          <textarea required></textarea>
          <label>Mensagem</label>
        </div>

        <button className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
