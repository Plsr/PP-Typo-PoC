import React, { Component } from 'react';
import './styles.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Row, Column } from 'react-foundation'
import { ChromePicker } from 'react-color'

var FaClose = require('react-icons/lib/fa/close');
var FaCheck = require('react-icons/lib/fa/check');

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

class RenderedText extends Component {
  render() {
    return (
      <Column small={12}>
        <TextContainer width={this.props.width} bodyFontSize={this.props.bodyFontSize} />
      </Column>
    )
  }
}

class TextContainer extends Component {
  render() {
    var cssStyles = {
      width: this.props.width
    }

    return(
      <div className="text-container" style={cssStyles}>
        <Headline1 fontSize={"36px"} marginTop={"30px"} marginBottom={"10px"} />
        <Paragraph fontSize={this.props.bodyFontSize} lineHeight={"24px"} />
        <Headline2 fontSize={"24px"} marginTop={"20px"} marginBottom={"10px"} />
        <Paragraph fontSize={"16px"} lineHeight={"24px"} />
        <Headline3 fontSize={"18px"} marginTop={"15px"} marginBottom={"10px"} />
        <Paragraph fontSize={"16px"} lineHeight={"24px"} />
      </div>
    )
  }
}

class Headline1 extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom
    }

    return(
      <h1 style={cssStyles}>Climb a tree</h1>
    )
  }
}

class Headline2 extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom
    }

    return(
      <h1 style={cssStyles}>wait for a fireman</h1>
    )
  }
}

class Headline3 extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom
    }

    return(
      <h1 style={cssStyles}>Chew iPad power cord</h1>
    )
  }
}

class Paragraph extends Component {
  render() {
    var cssStyles = {
      fontSize: this.props.fontSize,
      lineHeight: this.props.lineHeight
    }
    return (
      <p style={cssStyles}>Mew eat and than sleep on your face mrow lies down or find something else more interesting peer out window, chatter at birds, lure them to mouth for if it smells like fish eat as much as you wish. Vommit food and eat it again chase dog then run away yet intently stare at the same spot, for thinking longingly about tuna brine unwrap toilet paper vommit food and eat it again then cats take over the world. Has closed eyes but still sees you. Stare at ceiling poop on grasses climb a tree, wait for a fireman jump to fireman then scratch his face, and cats making all the muffins, and lick butt and make a weird face kitty scratches couch bad kitty. Sit in window and stare ooo, a bird!</p>
    )
  }
}

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

class SizeAdjustmentContainer extends Component {
  render() {
    return (
      <Column small={this.props.size}>
        <ContainerHeadline name={this.props.name} />
        <SliderElement value={this.props.value} />
        <KeepButton keep={this.props.keep} />
      </Column>
    );
  }
}

class DropdownContainer extends Component {
  render() {
    return(
      <Column small={this.props.size}>
        <ContainerHeadline name={this.props.name} />
        <DropdownMenu options={this.props.options} />
      </Column>
    )
  }
}

class ColorpickerContainer extends Component {
  render() {
    return(
      <Column small={this.props.size}>
        <h2>{this.props.name}</h2>
        <ChromePicker />
      </Column>
    )
  }
}

class WcagContainer extends Component {
  render() {
    return (
      <Column small={this.props.size}>
        <ContrastLevel level={'A'} passing={true} />
        <ContrastLevel level={'AA'} passing={true} />
        <ContrastLevel level={'AAA'} passing={false} />
      </Column>
    )
  }
}

class ContrastLevel extends Component {
  renderStateIcon() {
    if (this.props.passing){
      return(
        <FaCheck />
      )
    } else {
      return (
        <FaClose />
      )
    }
  }

  render() {
    return(
      <Column small={12}>
        { this.renderStateIcon() }
        <span>Level {this.props.level}</span>
      </Column>
    )
  }
}

class DropdownMenu extends Component {
  render() {
    return(
      <Column small={12}>
        <select>
          {this.props.options.map(function(option) {
            return <option value={option} key={option}>{option}</option>
          })}
        </select>
      </Column>
    )
  }
}

class ContainerHeadline extends Component {
  render() {
    return (
      <Column small={12}>
        <h2 style={{"wordWrap": "break-word"}}>{this.props.name}</h2>
      </Column>
    )
  }
}

class SliderElement extends Component {
  // TODO: Remove 'px' from value property
  render() {
    return (
      <Column small={12}>
        <input type="range" min="8" max="48" defaultValue={this.props.value} step="1" className="slider-element" />
      </Column>
    );
  }
}

class KeepButton extends Component {
  render() {
    return (
      <Column small={12}>
        <label>
          <input type="checkbox" checked={this.props.keep}/>
          Keep this value
        </label>
      </Column>
    );
  }
}

export default App;
