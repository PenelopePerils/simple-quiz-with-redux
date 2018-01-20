import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

import { Button } from './../components'
import { navigateWithoutBack } from './../navigation'

const HomeScreen = ({ navigation }) => {
  const { containerStyle, headerStyle, descriptionStyle, callToActionStyle } = styles
  
  return (
    <View style={containerStyle}> 
      <Text style={headerStyle}>Welcome to the Trivia Challenge!</Text>
      <Text style={descriptionStyle}>You will be presented with 10 True or False questions</Text>
      <Text style={callToActionStyle}>Can you score 100%?</Text>
      <Button label='BEGIN' onPress={() => navigation.dispatch(navigateWithoutBack('Play'))}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create(
  {
    containerStyle: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: '#A2E4F9',
      width: '100%',
      alignItems: 'center',
      padding: 20,
    },
    headerStyle: {
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    descriptionStyle: {
      color: 'black',
      fontSize: 30,
      textAlign: 'center'
    },
    callToActionStyle: {
      color: 'black',
      fontSize:30,
    },
  }
)