import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import charlist from './data/charlist';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fighters: charlist,
      searchField: ''
    };
  }

  //   componentDidMount() {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response => response.json())
  //       .then(users => this.setState({ fighters: users }));
  //   }

  render() {
    const { fighters, searchField } = this.state;
    const filteredFighters = fighters.filter(fighter =>
      fighter.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search"
          handleChange={e =>
            this.setState({
              searchField: e.target.value
            })
          }
        />
        <CardList fighters={filteredFighters} />
      </div>
    );
  }
}

export default App;
