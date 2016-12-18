import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import ColorpickerContainer from './ColorpickerContainer.js'
import WcagContainer from './WcagContainer.js'
import { connect } from 'react-redux'
import BodyTextOptions from './BodyTextOptions.js'
import Headline1Options from './Headline1Options.js'
import Headline2Options from './Headline2Options.js'
import Headline3Options from './Headline3Options.js'

class TabNavigation extends Component {

  render() {
    return (
      <Tabs
        onSelect={this.handleSelect}
      >
        <TabList>
          <Tab>Body</Tab>
          <Tab>Headline 1</Tab>
          <Tab>Headline 2</Tab>
          <Tab>Headline 3</Tab>
          <Tab>Colors</Tab>
        </TabList>

        <TabPanel>
          <BodyTextOptions />
        </TabPanel>
        <TabPanel>
          <Headline1Options />
        </TabPanel>
        <TabPanel>
          <Headline2Options />
        </TabPanel>
        <TabPanel>
          <Headline3Options />
        </TabPanel>
        <TabPanel>
          <ColorpickerContainer name={'Vordergrundfarbe'} stateKey={"fgColor"} color={this.props.fgColor} size={4} />
          <ColorpickerContainer name={'Hintergrundfarbe'} stateKey={"bgColor"} color={this.props.bgColor} size={4} />
          <WcagContainer size={4} fgColor={this.props.fgColor} bgColor={this.props.bgColor} />
        </TabPanel>
      </Tabs>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
}

export default TabNavigation = connect(
  mapStateToProps
)(TabNavigation)

