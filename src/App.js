import React, { Component } from 'react';
import './styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={2}
      >
        <TabList>
          <Tab>Body</Tab>
          <Tab>Headline 1</Tab>
          <Tab>Headline 2</Tab>
          <Tab>Headline 3</Tab>
          <Tab>Colors</Tab>
        </TabList>

        <TabPanel>
          <h2>Hello from Body</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Headline 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Headline 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Headline 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Colors</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default App;
