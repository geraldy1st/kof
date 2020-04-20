import React, { Component } from 'react';
import { Card } from './card/card.component.jsx';
import { SearchBox } from '../search-box/search-box.component';
import charlist from '../../data/charlist.json';
import './card-list.styles.css';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighters: charlist,
      searchField: '',
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { fighters, searchField } = this.state;
    const filteredFighters = fighters.filter((fighter) =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <SearchBox
          className="main-search"
          placeholder="search"
          handleChange={this.handleChange}
        />
        <div fighters={filteredFighters} className="card-list">
          {filteredFighters.map((fighter) => (
            <Card key={fighter.id} fighter={fighter} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
