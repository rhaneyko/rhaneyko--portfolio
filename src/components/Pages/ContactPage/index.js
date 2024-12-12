import React from "react";

import "./styles.css"

const ContactPage = () => {
    return (
       <div className="container__contactPage">
        <h1>Contato</h1>
        <form>
            <label for="name">Nome</label>
            <input type="text" placeholder="Digite seu nome"/>
            <label for="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail"/>
            
            <textarea placeholder="Digite sua mensagem..."/>
        </form>
       </div>

    )
}

export default ContactPage;