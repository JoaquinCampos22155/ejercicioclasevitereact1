import React, { useState } from 'react';
import Router from '.././componentes/router'

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [rutaActual, setRutaActual] = useState('');

  const handleSubmit = () => {
    // Verificar si el usuario y la contraseña son correctos
    if (usuario === 'usuario' && contrasena === 'contraseña') {
      // Si son correctos, cambiar la ruta
      setRutaActual('/info');
    } else {
      // Si no son correctos, mostrar un mensaje de error o realizar alguna acción
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className='paginas'>
      <div className="login-box">
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="login-box">
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Ingresar</button>
      <div className='paginas'>
        <Router ruta={rutaActual}></Router> 
      </div>
    </div>
  );
};

export default LoginForm;