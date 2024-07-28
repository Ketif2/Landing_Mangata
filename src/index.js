import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Selecciona el contenedor donde la app será montada
const container = document.getElementById('root');

// Crea una raíz
const root = createRoot(container); // Crea la raíz usando createRoot

// Renderiza la aplicación dentro del Router
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);