import React, { Component } from 'react';
import UpdatePost from './components/UpdatePost';
import StudentPortalpage from './components/StudentPortalpage';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Universities from './components/Universities';
import Postallookup from './components/Postallookup';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import SuccesResponse from './components/SuccessResponse';

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <StudentPortalpage />
        <Routes>
          <Route path='/' element={<Homepage />} />

          <Route path='/postallookup' element={<Postallookup />} />
          <Route path='/addpost' element={<AddPost />} />
          <Route path='/updatepost' element={<UpdatePost />} />
          <Route path='/universities' element={<Universities />} />
          <Route path='/searchpost' element={<SearchPost />} />
          <Route path='/successResponse' element={<SuccesResponse />} />
        </Routes>

      </div>

    );
  }
}

export default App;

