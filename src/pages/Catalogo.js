import React from "react";
import '../styles/Catalogo.css';

const Catalogo = () => {
  const servicios = [
    {
      titulo: "Sembrado Ecológico",
      descripcion: "Métodos sostenibles para un futuro mejor.",
      imagen: "/img/sembrado_ecologico.jpeg",
    },
    {
      titulo: "Riego Automático",
      descripcion: "Optimización del agua para grandes hectáreas.",
      imagen: "/img/riego_automatico.jpeg",
    },
    {
      titulo: "Cuidado del Medio Ambiente",
      descripcion: "Protegemos la biodiversidad en cada paso.",
      imagen: "/img/cuidado_medio_ambiente.jpg",
    },
    {
      titulo: "Procesamiento de Residuos",
      descripcion: "Transformamos desechos en recursos útiles.",
      imagen: "/img/recuperacion-de-desechos-de-su-empresa.jpg",
    },
    {
      titulo: "Monitoreo de Cultivos",
      descripcion: "Seguimiento detallado para maximizar la productividad.",
      imagen: "/img/MONITOREO_DE_CULTIVO_3.jpg",
    },
    {
      titulo: "Capacitación Agrícola",
      descripcion: "Formación en prácticas modernas y sostenibles.",
      imagen: "/img/Foto+Junin+27-05-2024.jpg",
    },
    {
      titulo: "Control de Plagas",
      descripcion: "Soluciones ecológicas para proteger tus cultivos.",
      imagen: "/img/control-de-plagas-1024x525-1.jpg",
    },
    {
      titulo: "Gestión de Nutrientes",
      descripcion: "Planes personalizados para mejorar la fertilidad del suelo.",
      imagen: "/img/nutrientes.jpeg",
    },
  ];

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-title">Catálogo de Servicios</h1>
      <div className="catalogo-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="catalogo-card">
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className="catalogo-image"
            />
            <h2 className="catalogo-card-title">{servicio.titulo}</h2>
            <p className="catalogo-card-description">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
