import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SearchBar from './SearchBar';
import Country from './Country';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/details/:id">
                <Country />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        <header>
    </header>
    </div>
    </Router>
  );
}

export default App;
