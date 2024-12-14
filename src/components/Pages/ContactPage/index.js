import React from "react";

import "./styles.css";

const ContactPage = () => {
  return (
    <div className="container__contactPage" id="contact">
      <h1>Contato</h1>
      <div className="row input-container">
        <div className="styled-input wide">
          <input type="text" required />
          <label>Nome</label>
        </div>

        <div className="styled-input">
          <input type="text" required />
          <label>E-mail</label>
        </div>
        <div>
          <div className="styled-input">
            <input type="text" required />
            <label>Telefone</label>
          </div>
        </div>

        <div class="styled-input wide">
          <textarea required></textarea>
          <label>Mensagem</label>
        </div>
        <button className=" submit-button">Enviar</button>
      </div>
    </div>
  );
};

export default ContactPage;
