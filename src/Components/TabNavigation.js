import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DropdownContainer from './DropdownContainer.js'
import SizeAdjustmentContainer from './SizeAdjustmentContainer.js'
import ColorpickerContainer from './ColorpickerContainer.js'
import WcagContainer from './WcagContainer.js'

class TabNavigation extends Component {
  render() {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
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
          <SizeAdjustmentContainer name={'Schriftgröße'} value={this.props.bodyFontSize} size={3} />
          <SizeAdjustmentContainer name={'Zeilenhöhe'} value={this.props.lineHeight} keep={true} size={3} />
          <SizeAdjustmentContainer name={'Laufweite'} value={this.props.bodyWidth} keep={true} size={3} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} value={this.props.h1Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} value={this.props.h1MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} value={this.props.h1MarginBottom} size={4} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} value={this.props.h2Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} value={this.props.h2MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} value={this.props.h2MarginBottom} size={4} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} value={this.props.h3Size} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} value={this.props.h1MarginTop} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} value={this.props.h1MarginBottom} size={4} />
        </TabPanel>
        <TabPanel>
          <ColorpickerContainer name={'Vordergrundfarbe'} color={this.props.fgColor} size={4} />
          <ColorpickerContainer name={'Hintergrundfarbe'} color={this.props.bgColor} size={4} />
          <WcagContainer size={4} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabNavigation;
