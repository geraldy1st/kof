import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './components/homepage/homepage.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/" component={HomePage} />
      <Route path="/characters" component={CardList} />
    </div>
  );
};

export default App;
