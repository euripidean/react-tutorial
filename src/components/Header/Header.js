import React from 'react';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';
import './Header.css'

function Title() {
    return (
      <div className='Header'>
        <header>
        <h1>SFPOPOS</h1>
        <div className='Header-Subtitle'> San Francisco's Privately Owned Public Spaces</div>
        <div>
        <NavLink 
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
        to="/">List</NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
        to="/about">About</NavLink>
        </div>
        <RandomSpace />
        </header>
      </div>
    )
  }
  
  export default Title
