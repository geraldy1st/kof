import React from 'react';
import { Card } from './card/card.component.jsx';
import './card-list.styles.css';
import charlist from '../../data/charlist.json';

export const CardList = () => (
  <div className="card-list">
    {charlist.map(fighter => (
      <Card key={fighter.id} fighter={fighter} />
    ))}
  </div>
);
