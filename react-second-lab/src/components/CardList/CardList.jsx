import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

function CardList({ cardsData }) {
  return (
    <div className="card-list">
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

export default CardList;
