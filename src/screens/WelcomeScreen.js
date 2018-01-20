import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { navigateWithoutBack } from './../navigation'

export default class WelcomeScreen extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.dispatch(navigateWithoutBack('Home')), 1500)
  }
  
  render() {
    const { containerStyle, titleStyle, logoStyle } = styles
    
    return (
      <View style={containerStyle}>
        <Text style={titleStyle}>
          Simple
        </Text>
        <Image style={logoStyle} source={require("../../assets/quiz.png")}/>
         <Text style={titleStyle}>
          Loading...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#A2E4F9",
  },
  titleStyle: {
    margin: 24,
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D34936',
  },
  logoStyle: {
    height: 128,
    width: 256,
  }
});
