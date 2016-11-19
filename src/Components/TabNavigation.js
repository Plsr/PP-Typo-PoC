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
          <DropdownContainer name={'Schriftart'} size={3} options={['Times new Roman', 'Verdana', 'Helvetica']} />
          <SizeAdjustmentContainer name={'Schriftgröße'} value={this.props.bodyFontSize} size={3} />
          <SizeAdjustmentContainer name={'Zeilenhöhe'} value={"24"} keep={true} size={3} />
          <SizeAdjustmentContainer name={'Laufweite'} value={"500"} keep={true} size={3} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} value={"36"} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} value={"30"} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} value={"20"} size={4} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} value={"24"} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} value={"20"} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} value={"10"} size={4} />
        </TabPanel>
        <TabPanel>
          <SizeAdjustmentContainer name={'Schriftgröße'} value={"18"} size={4} />
          <SizeAdjustmentContainer name={'Abstand oben'} value={"15"} size={4} />
          <SizeAdjustmentContainer name={'Abstand unten'} value={"10"} size={4} />
        </TabPanel>
        <TabPanel>
          <ColorpickerContainer name={'Vordergrundfarbe'} size={4} />
          <ColorpickerContainer name={'Hintergrundfarbe'} size={4} />
          <WcagContainer size={4} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabNavigation;
