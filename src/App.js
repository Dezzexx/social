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
import Sidebar from './components/sidebar/Sidebar';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs
            state={props.state.DialogsPage} />} />
          <Route path='/Profile' render={() => <Profile
            profilePage={props.state.ProfilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path='/Feeds' render={() => <Feeds />} />
          <Route path='/Musics' render={() => <Musics />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>
        <Sidebar state={props.state.sidebar} />

      </div>
    </BrowserRouter>
  );
}

export default App;

