import React, { useState } from 'react';
import '../styles/Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    // Validar email con expresión regular
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Correo electrónico no válido.');
      return;
    }

    // Validar contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Si pasa todas las validaciones
    setError('');
    alert('Formulario enviado correctamente');
    // Aquí puedes agregar la lógica para enviar los datos al servidor o procesarlos
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para correo electrónico */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu correo electrónico"
          />
        </div>

        {/* Campo para contraseña */}
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
          />
        </div>

        {/* Mostrar error si es necesario */}
        {error && <p className="error-message">{error}</p>}

        {/* Botón de inicio de sesión */}
        <button type="submit" className="submit-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
