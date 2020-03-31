import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className="card-container">
    <img src={props.fighter.photo} alt="fighter" />
    <h2>{props.fighter.name}</h2>
  </div>
);
