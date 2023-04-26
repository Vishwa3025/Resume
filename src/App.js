import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Design from './components/design';
import LandingPage from './components/landingPage';

class App extends Component {

  render() {
    return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/design' element={<Design />} />
      </Routes>
    )
  }
}

export default App;
