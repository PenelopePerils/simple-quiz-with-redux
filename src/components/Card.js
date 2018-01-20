import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Card = ({ question }) => {
  const {questionStyle, containerStyle} = styles
  
    return (
      <View style={containerStyle}>
        <Text style={questionStyle}>{question}</Text>
      </View>
  )
}


export default Card

const styles = StyleSheet.create(
  {
    containerStyle:{
      padding: 20,
      backgroundColor: 'white',
      width: '90%',
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    questionStyle: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
    }
  }
)