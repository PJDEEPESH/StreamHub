import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Login,SignUp,Home, SearchFeed, VideoDetail, ChannelDetail,Error } from './components';


function App() {
  return (  
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path='/home' element={<Home />} errorElement={<Error/>} />
            <Route path='/video/:id' element={<VideoDetail />}/>
            <Route path='/channel/:id' element={<ChannelDetail />}/>
            <Route path='/search/:searchTerm' element={<SearchFeed />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
