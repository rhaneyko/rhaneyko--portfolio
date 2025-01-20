import React from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./styles.css";

const ContactSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "+55992787669";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleLinkedIn = () => {
    const linkedInProfile = "https://www.linkedin.com/in/rhaneyko";
    window.open(linkedInProfile, "_blank");
  };

  const handleEmail = () => {
    const email = "rhaneykohonorio@gmail.com";
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Entre em Contato</h2>
      <div className="contact-icons">
        <div className="icon" onClick={handleWhatsApp}>
          <FaWhatsapp size={40} color="#25D366" />
          <p>WhatsApp</p>
        </div>
        <div className="icon" onClick={handleLinkedIn}>
          <FaLinkedin size={40} color="#0077B5" />
          <p>LinkedIn</p>
        </div>
        <div className="icon" onClick={handleEmail}>
          <FaEnvelope size={40} color="#EA4335" />
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
