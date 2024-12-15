import React from "react";

import "./styles.css";


const ContactPage = () => {
  return (
    <div className="container__contactPage" id="contact">
      <h1 className="contact__title">Contato</h1>
      <div className="row input__container">
        <div className="styled__input wide">
          <input type="text" required />
          <label>Nome</label>
        </div>
       
        <div className="styled__input">
          <input type="text" required />
          <label>E-mail</label>
        </div>
        <div className="styled__input">
          <input type="text" required />
          <label>Telefone</label>
        </div>

        <div class="styled__input wide">
          <textarea required></textarea>
          <label>Mensagem</label>
        </div>
        <button className="submit__button">Enviar</button>
      </div>
    </div>
  );
};

export default ContactPage;
