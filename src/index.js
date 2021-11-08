import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let DialogsBlock = [
  { id: '1', name: 'Natasha' },
  { id: '2', name: 'Andrey' },
]

let Messages = [
  { id: '1', message: 'Привет' },
  { id: '2', message: 'Че делаешь?' },
]

let Posts = [
  { message: 'Hello, good bless to you', likes: 'like: 15' },
  { message: 'Hi from Canada', likes: 'like: 20' },
]

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {DialogsBlock, Messages, Posts};