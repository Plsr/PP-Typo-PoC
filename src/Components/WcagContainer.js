import React, { Component } from 'react';
import { Column } from 'react-foundation';
import ContrastLevel from './ContrastLevel.js'
import hexRgb from 'hex-rgb';

class WcagContainer extends Component {


  // Check contrast of the two currently picked colors
  // based on WCAG 2.0 G18
  // https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/G18
  calculateRatio() {
    // Get currently set colors
    let bgColor = hexRgb(this.props.bgColor)
    let fgColor = hexRgb(this.props.fgColor)
    var colors = [bgColor, fgColor];
    var lumis = [];
    var ratio;

    for(var i = 0; i <colors.length; i++) {
      var currColor = colors[i];

      // Convert RGB values of colors to sRGB
      // Then do claculations as specified in WCAG 2.0 G18
      // https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/G18#G18-tests
      for (var singleColor in currColor) {
        if (currColor.hasOwnProperty(singleColor)) {
          currColor[singleColor] = currColor[singleColor] / 255;

          if (currColor[singleColor] <= 0.03928) {
            currColor[singleColor] = currColor[singleColor] / 12.92;
          } else {
            currColor[singleColor] = Math.pow(((currColor[singleColor] + 0.055) / 1.055), 2.4);
          }
        }
      }

      // Store luminances of foreground and background color
      lumis.push((0.2126 * currColor[0] + 0.7152 * currColor[1] + 0.0722 * currColor[2]) + 0.05);
    }

    // Normalize luminances so that the darker one is 1
    if(lumis[0] > lumis[1]) {
      var multiplicator = 1 / lumis[1];
      lumis[0] = lumis[0] * multiplicator;
      ratio = lumis[0];
    } else {
      var multiplicator = 1 / lumis[0];
      lumis[1] = lumis[1] * multiplicator;
      ratio = lumis[1];
    }

    return ratio
  };

  passingLevelForRatio(level, ratio) {
    switch(level) {
      case 'A':
        return ratio >= 3
        break
      case 'AA':
        return ratio >= 4.5
        break
      case 'AAA':
        return ratio >= 7
        break
      default:
        return false
    }
  }

  render() {
    let ratio = this.calculateRatio()
    return (
      <Column small={this.props.size}>
        <ContrastLevel level={'A'} passing={this.passingLevelForRatio('A', ratio)} />
        <ContrastLevel level={'AA'} passing={this.passingLevelForRatio('AA', ratio)} />
        <ContrastLevel level={'AAA'} passing={this.passingLevelForRatio('AAA', ratio)} />
      </Column>
    );
  }
}

export default WcagContainer;
