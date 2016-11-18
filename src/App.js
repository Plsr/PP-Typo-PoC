import React, { Component } from 'react';
import './styles.css';
import { Tabs, TabItem } from 'react-foundation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabNavigation />
      </div>
    );
  }
}

class TabNavigation extends Component {
  render() {
    return (
      <Tabs>
        <TabItem><a href="#panel1" aria-selected="true">Tab 1</a></TabItem>
        <TabItem><a href="#panel2">Tab 2</a></TabItem>
      </Tabs>
    )
  }
}

export default App;
