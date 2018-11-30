import React, { Component } from 'react';
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';
import redux from "./captain";
import { PersistGate } from "redux-persist/integration/react";
import StoreInitialLoader from "./persistorLoader";
import MainWrapper from "./Root";
redux.persistor.purge();
class App extends Component {
  render() {
    return (
      <Provider store={redux.store}>
        <PersistGate loading={<StoreInitialLoader/>} persistor={redux.persistor}>
          <MainWrapper/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
