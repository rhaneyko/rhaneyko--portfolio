import React from "react";

import "./styles.css";

const ContactPage = () => {
  return (
    <div class="row">
      <h1>Contato</h1>

      <div class="row input-container">
        <div class="styled-input wide">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div class="styled-input">
          <input type="text" required />
          <label>Email</label>
        </div>

        <div class="styled-input">
          <input type="text" required />
          <label>Phone Number</label>
        </div>
        <div class="styled-input wide">
          <textarea required></textarea>
          <label>Message</label>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
