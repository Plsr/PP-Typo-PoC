import React, { Component } from 'react';
import './styles.css';
import { Row, Column } from 'react-foundation';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import TabNavigation from './Components/TabNavigation.js';
import RenderedText from './Components/RenderedText.js';

import typographyChanger from './reducers'

import createLogger from 'redux-logger';


class App extends Component {
  render() {
    // DEBUG - Init logger
    const logger = createLogger();

    let store = createStore(
      typographyChanger,
      // DEBUG - Add logger as Middleware
      applyMiddleware(logger)
    );

    return (
      <Provider store={store}>
        <div className="App">
          <Row className="display">
            <Column small={12}>
              <TabNavigation />
            </Column>
          </Row>
          <Row className="display">
            <Column small={12}>
              <RenderedText />
            </Column>
          </Row>
        </div>
      </Provider>
    );
  }
}

export default App;
