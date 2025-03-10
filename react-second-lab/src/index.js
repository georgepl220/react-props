// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Використовуємо `react-dom/client` для React 18

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Створення кореня для рендерингу
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
