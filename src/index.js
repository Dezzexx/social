import state, { subscribe } from './Redux/State';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText } from './Redux/State';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
