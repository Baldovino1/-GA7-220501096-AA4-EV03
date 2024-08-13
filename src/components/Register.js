import React, { useState } from 'react';
import './App.css';

function Register() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Registrando usuario con', usuario, password);
  };

  return (
    <div className="registro">
      <form onSubmit={handleSubmit} className="registro-form">
        <h1>Ingresar</h1>
        <div className="group">
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="usuario"
            id="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="contraseña">Confirmar Contraseña:</label>
          <input
            type="password"
            id="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
