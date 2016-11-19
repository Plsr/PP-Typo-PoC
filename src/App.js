import React, { Component } from 'react';
import './styles.css';
import { Row, Column } from 'react-foundation';
import TabNavigation from './Components/TabNavigation.js';
import RenderedText from './Components/RenderedText.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontFamily: 'Arial',
      bodyFontSize: '22',
      lineHeight: '26',
      bodyWidth: '600',
      h1Size: '36',
      h1MarginTop: '30',
      h1MarginBottom: '20',
      h2Size: '24',
      h2MarginTop: '20',
      h2MarginBottom: '15',
      h3Size: '18',
      h3MarginTop: '20',
      h3MarginBottom: '10',
      bgColor: '#fff',
      fgColor: '#000'
    };
  }

  render() {
    return (
      <div className="App">
        <Row className="display">
          <Column small={12}>
            <TabNavigation
              fontFamily={this.state.fontFamily}
              bodyFontSize={this.state.bodyFontSize}
              lineheight={this.state.lineHeight}
              bodyWidth={this.state.bodyWidth}
              h1Size={this.state.h1Size}
              h1MarginTop={this.state.h1MarginTop}
              h1MarginBottom={this.state.h1MarginBottom}
              h2Size={this.state.h2Size}
              h2MarginTop={this.state.h2MarginTop}
              h2MarginBottom={this.state.h2MarginBottom}
              h3Size={this.state.h3Size}
              h3MarginTop={this.state.h3MarginTop}
              h3MarginBottom={this.state.h3MarginBottom}
              bgColor={this.state.bgColor}
              fgColor={this.state.fgColor}
            />
          </Column>
        </Row>
        <Row className="display">
          <Column small={12}>
            <RenderedText
              fontFamily={this.state.fontFamily}
              bodyFontSize={this.state.bodyFontSize}
              lineheight={this.state.lineHeight}
              bodyWidth={this.state.bodyWidth}
              h1Size={this.state.h1Size}
              h1MarginTop={this.state.h1MarginTop}
              h1MarginBottom={this.state.h1MarginBottom}
              h2Size={this.state.h2Size}
              h2MarginTop={this.state.h2MarginTop}
              h2MarginBottom={this.state.h2MarginBottom}
              h3Size={this.state.h3Size}
              h3MarginTop={this.state.h3MarginTop}
              h3MarginBottom={this.state.h3MarginBottom}
              bgColor={this.state.bgColor}
              fgColor={this.state.fgColor}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;
