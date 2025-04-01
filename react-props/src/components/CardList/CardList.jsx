import React from 'react';
import ProfileCard from '../Card/Card';

function CardList({ cardsData }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardsData.map((card) => (
        <ProfileCard
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
