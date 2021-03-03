import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')

      // LOCAL STORAGE
    let songs;
    let users;
    if (window.localStorage.getItem("songs")) {
        songs = JSON.parse(window.localStorage.getItem('songs'));
    }
    if (window.localStorage.getItem("users")) {
        users = JSON.parse(window.localStorage.getItem('users'));
    }
    
    // const store = configureStore()
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
                songs: songs
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //testing 
    window.store = store
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //testing
    ReactDOM.render(<Root store={store} />, root)
})