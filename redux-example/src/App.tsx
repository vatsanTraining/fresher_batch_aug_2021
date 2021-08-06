import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './redux/components/Application';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SecondApplication } from './redux/components/SecondApplication';
import { MyApplication } from './redux/context-api/MyApplication';
function App() {
  return (
    <div>
      <Provider store={store}>
        <Application></Application>
        <SecondApplication></SecondApplication>
      </Provider>

      <MyApplication></MyApplication>
    </div>
  );
}

export default App;
