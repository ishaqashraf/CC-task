import React, { Component } from 'react';
import Routes from './src/components/routes';
import reducers from './src/reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}