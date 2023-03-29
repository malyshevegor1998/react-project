import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, addNewPostText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addNewPostText={addNewPostText}/>
    </React.StrictMode>
  );
  reportWebVitals();
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);