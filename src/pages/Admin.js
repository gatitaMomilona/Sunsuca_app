import React, { useState } from 'react';
import '../styles/Admin.css';

function Admin() {
  // Estado para almacenar los eventos y las citas
  const [events, setEvents] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    date: '',
    time: ''
  });

  const [newAppointment, setNewAppointment] = useState({
    clientName: '',
    service: '',
    date: '',
    time: ''
  });

  // Función para manejar el envío del formulario de evento
  const handleAddEvent = () => {
    if (!newEvent.name || !newEvent.description || !newEvent.date || !newEvent.time) {
      alert('Por favor complete todos los campos.');
      return;
    }
    setEvents([...events, newEvent]);
    setNewEvent({ name: '', description: '', date: '', time: '' });
  };

  // Función para manejar el envío del formulario de cita
  const handleAddAppointment = () => {
    if (!newAppointment.clientName || !newAppointment.service || !newAppointment.date || !newAppointment.time) {
      alert('Por favor complete todos los campos.');
      return;
    }
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ clientName: '', service: '', date: '', time: '' });
  };

  // Función para eliminar un evento
  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, eventIndex) => eventIndex !== index);
    setEvents(updatedEvents);
  };

  // Función para eliminar una cita
  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, appointmentIndex) => appointmentIndex !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>

      {/* Gestión de Eventos */}
      <section className="section">
        <h2>Gestionar Eventos</h2>
        <div className="input-group">
          <input
            type="text"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            placeholder="Nombre del Evento"
          />
          <textarea
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            placeholder="Descripción del Evento"
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <input
            type="time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
          />
          <button onClick={handleAddEvent} className="btn">Agregar Evento</button>
        </div>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p><strong>Fecha:</strong> {event.date} <strong>Hora:</strong> {event.time}</p>
              <button onClick={() => handleDeleteEvent(index)} className="btn delete-btn">Eliminar</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Gestión de Citas */}
      <section className="section">
        <h2>Gestionar Citas</h2>
        <div className="input-group">
          <input
            type="text"
            value={newAppointment.clientName}
            onChange={(e) => setNewAppointment({ ...newAppointment, clientName: e.target.value })}
            placeholder="Nombre del Cliente"
          />
          <input
            type="text"
            value={newAppointment.service}
            onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })}
            placeholder="Servicio"
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
          <button onClick={handleAddAppointment} className="btn">Agregar Cita</button>
        </div>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className="appointment-item">
              <h3>{appointment.clientName}</h3>
              <p>{appointment.service}</p>
              <p><strong>Fecha:</strong> {appointment.date} <strong>Hora:</strong> {appointment.time}</p>
              <button onClick={() => handleDeleteAppointment(index)} className="btn delete-btn">Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Admin;
