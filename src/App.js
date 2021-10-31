import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navigationbar';
import Profile from './components/Profile/Profile';
import Feeds from './components/Feeds/Feeds';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        <Route path='/Dialogs' component= {Dialogs}/>
        <Route path='/Profile' component= {Profile}/>
        <Route path='/Feeds' component= {Feeds}/>
        <Route path='/Musics' component= {Musics}/>
        <Route path='/Settings' component= {Settings}/>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;

