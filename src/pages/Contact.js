import React from 'react';
import '../styles/Contact.css'; // Asegúrate de tener un archivo de estilo

function Contact() {
  return (
    <div className="contact-form-container">
      <h2>Formulario de Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Escribe tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escribe tu correo electrónico"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
          />
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
