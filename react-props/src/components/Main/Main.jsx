import React from 'react';
import Card from '../Card/Card';

function Main({ cardsData }) {
  return (
    <div className="main">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default Main;