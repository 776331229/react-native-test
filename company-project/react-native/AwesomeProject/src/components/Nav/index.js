/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <View>
          <Text>111111111</Text>
        </View>
    );
  }
}


AppRegistry.registerComponent('Nav', () => Nav);
