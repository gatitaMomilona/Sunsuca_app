import React, { useState } from 'react';
import '../styles/Gallery.css';

import sembradoEcologico from '../img/images.jpeg';
import riegoAutomatico from '../img/AdobeStock_33552553-scaled-e1634742242695-1536x752-1.jpeg';
import cuidadoMedioAmbiente from '../img/manos-tierra-nino.jpg';

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const galleryItems = [
    {
      image: sembradoEcologico,
      title: 'Sembrado Ecológico',
      description: 'Nuestras soluciones de sembrado ecológico ayudan a reducir el impacto ambiental.'
    },
    {
      image: riegoAutomatico,
      title: 'Riego Automático de Hectáreas',
      description: 'Nuestro sistema de riego inteligente optimiza el uso del agua y ahorra tiempo.'
    },
    {
      image: cuidadoMedioAmbiente,
      title: 'Cuidado del Medio Ambiente',
      description: 'Implementamos prácticas sostenibles para preservar el medio ambiente.'
    }
  ];

  return (
    <div className="gallery-container">
      <h3>Galería de Servicios Agropecuarios</h3>
      <p>Explore algunas de nuestras innovadoras soluciones en sembrados ecológicos, riego automático y más.</p>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
