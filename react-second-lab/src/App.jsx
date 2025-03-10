// src/App.jsx
import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import cardsData from './data';

function App() {
  return (
    <div className="App">
      <h1>Галерея карток</h1>
      <CardList cardsData={cardsData} />
    </div>
  );
}

export default App;
