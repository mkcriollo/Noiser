import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    const store = configureStore()
    //testing 
    window.store = store
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //testing
    ReactDOM.render(<Root store={store} />, root)
})