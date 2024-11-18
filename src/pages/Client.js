import React, { useState } from 'react';
import '../styles/Client.css'; // Asegúrate de tener los estilos de esta página

function Client() {
  const [events, setEvents] = useState([
    { name: 'Evento de Agricultura Ecológica', description: 'Charla sobre prácticas sostenibles.', date: '2024-11-20', time: '10:00' },
    { name: 'Taller de Tecnología Agropecuaria', description: 'Taller de innovación en el campo.', date: '2024-11-22', time: '14:00' }
  ]);

  const [appointments, setAppointments] = useState([
    { clientName: 'Ana Mendoza', service: 'Asesoría agrícola', date: '2024-11-21', time: '11:00' }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    clientName: '',
    service: '',
    date: '',
    time: ''
  });

  const handleScheduleAppointment = () => {
    if (!newAppointment.clientName || !newAppointment.service || !newAppointment.date || !newAppointment.time) {
      alert('Por favor complete todos los campos.');
      return;
    }
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ clientName: '', service: '', date: '', time: '' });
  };

  return (
    <div className="home-content">
      <h1 className="section-title">Panel de Cliente</h1>

      {/* Sección de Eventos */}
      <section className="section">
        <h2 className="section-title">Eventos Disponibles</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="values-list">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p><strong>Fecha:</strong> {event.date} <strong>Hora:</strong> {event.time}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sección de Citas Agendadas */}
      <section className="section">
        <h2 className="section-title">Citas Agendadas</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className="values-list">
              <h3>{appointment.clientName}</h3>
              <p>{appointment.service}</p>
              <p><strong>Fecha:</strong> {appointment.date} <strong>Hora:</strong> {appointment.time}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Formulario para Agendar Cita */}
      <section className="section">
        <h2 className="section-title">Agendar Cita</h2>
        <div className="input-group">
          <input
            type="text"
            value={newAppointment.clientName}
            onChange={(e) => setNewAppointment({ ...newAppointment, clientName: e.target.value })}
            placeholder="Tu nombre"
          />
          <input
            type="text"
            value={newAppointment.service}
            onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })}
            placeholder="Servicio requerido"
          />
          <input
            type="date"
            value={newAppointment.date}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
          />
          <input
            type="time"
            value={newAppointment.time}
            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
          />
          <button onClick={handleScheduleAppointment} className="btn">Agendar Cita</button>
        </div>
      </section>
    </div>
  );
}

export default Client;
