import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import ColorpickerContainer from './ColorpickerContainer.js'
import WcagContainer from './WcagContainer.js'
import { connect } from 'react-redux'
import BodyTextOptions from './BodyTextOptions.js'
import Headline1Options from './Headline1Options.js'
import Headline2Options from './Headline2Options.js'

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
          <SizeAdjustmentContainer name={'Schriftgröße'} stateKey={"h3Size"} value={this.props.h3Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} stateKey={"h1MarginTop"} value={this.props.h1MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} stateKey={"h1MarginBottom"} value={this.props.h1MarginBottom} size={4} />
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

