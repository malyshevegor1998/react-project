import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addNewPostText, addPost } from './redux/state.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addNewPostText={addNewPostText}/>
    </React.StrictMode>
  );
  reportWebVitals();
};