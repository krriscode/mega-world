import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Cart from './components/Cart';
import Home from './components/Home';
import Users from './components/Users';
import Orders from './components/Orders';
import Search from './components/Search';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className='navbar navbar-expand-lg navbar-light bg-custom'>
            <span className='navbar-brand'> Mega World </span>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to="/home"> Home</Link>
              </li>
              <li>
                <Link className='nav-link' to="/search"> Search</Link>
              </li>
              <li>
                <Link className='nav-link' to="/users"> Users</Link>
              </li>
              <li>
                <Link className='nav-link' to="/orders"> Orders</Link>
              </li>
              <li>
                <Link className='nav-link' to="/viewcart"> ViewCart</Link>
              </li>
            </ul>
          </nav>
          <nav className='navbar navbar-expand-lg'>
            <ul>
              <li>All</li>
              <li>Latest</li>
              <li>Offer and Gifts</li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/users" component={Users} />
            <Route path="/home" component={Home} />
            <Route path="/orders" component={Orders} />
            <Route path="/viewcart" component={Cart} />
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
