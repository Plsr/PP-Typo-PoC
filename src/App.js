import React, { Component } from 'react';
import './styles.css';
import { Row, Column } from 'react-foundation';
import TabNavigation from './Components/TabNavigation.js';
import RenderedText from './Components/RenderedText.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyFontSize: '22px',
      lineHeight: '26px',
      bodyWidth: '600px'
    };
  }

  render() {
    return (
      <div className="App">
        <Row className="display">
          <Column small={12}>
            <TabNavigation
              bodyFontSize={this.state.bodyFontSize}
              lineheight={this.state.lineHeight}
              bodyWidth={this.state.bodyWidth}
            />
          </Column>
        </Row>
        <Row className="display">
          <Column small={12}>
            <RenderedText
              bodyFontSize={this.state.bodyFontSize}
              width={this.state.bodyWidth}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;
