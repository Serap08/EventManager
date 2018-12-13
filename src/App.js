// App.js

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Index from './components/index.component';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Calendar Events</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create Event</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/index' component={ Index } />
              <Route path='/' component={ Index } />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;