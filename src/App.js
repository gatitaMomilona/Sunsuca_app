import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';

import Catalogo from './pages/Catalogo';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin'; 
import Client from './pages/Client';  // Importa el componente del cliente

import LogoSunsuca from './img/Captura de pantalla 2024-11-14 085038.png';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Cabecera */}
        <header className="header">
          <img src={LogoSunsuca} alt="Sembrado Ecológico" className="logo" />
          <nav className="nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/catalogo" className="nav-link">Catálogo</Link>
            <Link to="/gallery" className="nav-link">Galería</Link>
            <Link to="/contact" className="nav-link">Contacto</Link>
            <Link to="/login" className="nav-link">Inicio Sesión</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/client" element={<Client />} /> {/* Ruta para cliente */}
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Sunsuca. Todos los derechos reservados.</p>
            <p>Ubicación: Carretera Rural KM 45, Valle del Cauca, Colombia</p>
            <p>
              Contacto: 
              <a href="mailto:info@sunsuca.com">info@sunsuca.com</a> | Tel: +57 300 123 4567
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomeContent() {
  return (
    <section className="home-content">
      <h2 className="section-title">Nuestra Misión</h2>
      <p className="section-text">
        En Sunsuca, nos dedicamos a promover la sostenibilidad a través de prácticas de agricultura ecológica. Creemos en el poder de la tecnología para transformar el sector agropecuario, permitiendo una producción eficiente y responsable con el medio ambiente.
      </p>

      <h2 className="section-title">Nuestros Valores</h2>
      <ul className="values-list">
        <li>🌱 <strong>Sostenibilidad:</strong> Reducimos el impacto ambiental y fomentamos la biodiversidad.</li>
        <li>🚜 <strong>Innovación:</strong> Utilizamos tecnologías de punta para optimizar nuestros procesos.</li>
        <li>🤝 <strong>Compromiso:</strong> Trabajamos de la mano con nuestras comunidades y clientes.</li>
        <li>📈 <strong>Calidad:</strong> Ofrecemos soluciones de alta calidad para el desarrollo del campo.</li>
      </ul>

      <h2 className="section-title">Nuestros Servicios</h2>
      <p className="section-text">
        Ofrecemos una variedad de servicios para ayudar a nuestros clientes a implementar prácticas agrícolas sostenibles, que incluyen:
      </p>
      <ul className="services-list">
        <li>✔️ Siembra Ecológica</li>
        <li>✔️ Riego Automático de Hectáreas</li>
        <li>✔️ Procesamiento de Residuos Biológicos</li>
        <li>✔️ Monitoreo Ambiental y Sustentabilidad</li>
      </ul>
    </section>
  );
}


export default App;
