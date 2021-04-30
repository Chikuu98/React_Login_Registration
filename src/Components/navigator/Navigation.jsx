import React, { Component } from 'react';
import './NavigationStyles.css';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar1">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary text-primary">
        <a className="navbar-brand" href="/">CHIKU HUB</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">LogIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sign">SignUp</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Item1</a>
                <a className="dropdown-item" href="#">Item2</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Item3</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="SearchBox">
        <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search" />
        </span>
      </div>
        </div>
      </nav>
            </div>
        );
    }
}

export default Navigation;
