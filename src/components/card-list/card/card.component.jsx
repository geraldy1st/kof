import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img src={props.fighter.photo} alt="fighter" />
    <h4>{props.fighter.name}</h4>
  </div>
);
