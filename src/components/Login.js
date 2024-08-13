import React, { useState } from 'react';
import './App.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con', usuario, password);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Ingresar</h1>
        <div className="form-group">
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="usuario"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-link">
          <p>No tienes una cuenta? <a href="/register">Regístrate</a></p>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
