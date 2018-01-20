import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ResultHeadline = ({ score, numberOfQuestions }) => {

    const { containerStyle, headerStyle } = styles
    
    return (
      <View style={containerStyle}> 
        <Text style={headerStyle}>You scored</Text>
        <Text style={headerStyle}>{`${score} / ${numberOfQuestions}`}</Text>
      </View>
    )
}

const styles = StyleSheet.create(
  {
    containerStyle: {
      padding: 10,
      alignItems: 'center',
    },
    headerStyle: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },
  }
)

export default ResultHeadline