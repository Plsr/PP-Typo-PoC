import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DropdownContainer from './DropdownContainer.js'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import ColorpickerContainer from './ColorpickerContainer.js'
import WcagContainer from './WcagContainer.js'
import { connect } from 'react-redux'

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
          <DropdownContainer name={'Schriftart'} size={3} options={['Times new Roman', 'Verdana', 'Arial', 'Helvetica']} selected={this.props.fontFamily} />
          <SizeAdjustmentContainer name={'Schriftgröße'} stateKey={"bodyFontSize"} value={this.props.bodyFontSize} size={3} />
          <SizeAdjustmentContainer name={'Zeilenhöhe'} stateKey={"lineHeight"} value={this.props.lineHeight} keep={true} size={3} />
          <SizeAdjustmentContainer name={'Laufweite'} stateKey={"bodyWidth"} value={this.props.bodyWidth} keep={true} size={3} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} stateKey={"h1Size"} value={this.props.h1Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} stateKey={"h1MarginTop"} value={this.props.h1MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} stateKey={"h1MarginBottom"} value={this.props.h1MarginBottom} size={4} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} stateKey={"h2Size"} value={this.props.h2Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} stateKey={"h2MarginTop"} value={this.props.h2MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} stateKey={"h2MarginBottom"} value={this.props.h2MarginBottom} size={4} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} stateKey={"h3Size"} value={this.props.h3Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} stateKey={"h1MarginTop"} value={this.props.h1MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} stateKey={"h1MarginBottom"} value={this.props.h1MarginBottom} size={4} />
        </TabPanel>
        <TabPanel>
          <ColorpickerContainer name={'Vordergrundfarbe'} stateKey={"fgColor"} color={this.props.fgColor} size={4} />
          <ColorpickerContainer name={'Hintergrundfarbe'} stateKey={"bgColor"} color={this.props.bgColor} size={4} />
          <WcagContainer size={4} />
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

