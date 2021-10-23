import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navigationbar';
import Content from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Content />

    </div>

  );
}

export default App;

