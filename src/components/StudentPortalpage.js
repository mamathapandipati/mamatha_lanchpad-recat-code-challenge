import React from 'react';
import Universities from './Universities';
import Postallookup from './Postallookup';
import { NavLink } from 'react-router-dom';
import AddPost from './AddPost';
import { Route, Routes } from 'react-router-dom';

const Homepage = () => {
  return (

    <div class="header">
      <h1 >Welcome to Mamatha's Lanchpad</h1>
      <div>
        <NavLink activeClassname='active' className='link' to='/'>Home</NavLink>
        <NavLink activeClassname='active' className='link' to='/universities'>Universities</NavLink>
        <NavLink activeClassname='active' className='link' to='/postallookup'>Postal lookup</NavLink>
      </div>
    </div>
  )
}

export default Homepage;