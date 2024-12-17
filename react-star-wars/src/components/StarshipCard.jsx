import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      {<h2>{starship.name}</h2> }
    </div>
  );
}

export default StarshipCard;


