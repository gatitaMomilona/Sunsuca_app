import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para la redirección
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Usuarios y roles predefinidos
  const users = [
    { email: 'danysantana258@gmail.com', password: '123456', role: 'admin' }, // Administrador
    { email: 'mendozalorena@gmail.com', password: '123456', role: 'cliente' } // Cliente
  ];

  const navigate = useNavigate();  // Inicializa useNavigate para redirección

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

    // Buscar el usuario en la lista de usuarios predefinidos
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      setError('Correo electrónico o contraseña incorrectos.');
      return;
    }

    // Si el usuario es encontrado, redirigir según su rol
    setError('');
    alert('Inicio de sesión exitoso');
    
    if (user.role === 'admin') {
      alert('Bienvenido Administrador');
      // Redirigir a la página de administración
      navigate('/admin');  // Redirige al componente Admin
    } else if (user.role === 'cliente') {
      alert('Bienvenido Cliente');
      // Redirigir a la página del cliente
      navigate('/client');  // Redirige al componente Cliente
    }
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
