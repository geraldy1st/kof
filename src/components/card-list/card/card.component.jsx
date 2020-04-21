import React from 'react';
import { Link } from 'react-router-dom';
// import Fighter from '../fighter/fighter.component';

import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <Link to={props.fighter.name}>
      <img src={props.fighter.photo} alt="fighter" />
      <h2>{props.fighter.name}</h2>
    </Link>
  </div>
);
