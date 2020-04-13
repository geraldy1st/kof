import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import Navbar from './components/navbar/navbar.component';
import charlist from './data/charlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighters: charlist,
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
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
      <div className="App">
        <Navbar />
        <SearchBox placeholder="search" handleChange={this.handleChange} />
        <CardList fighters={filteredFighters} />
      </div>
    );
  }
}

export default App;
