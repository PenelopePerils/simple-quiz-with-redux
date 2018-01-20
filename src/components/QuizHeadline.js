import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const QuizHeadline = ({ category }) => {

    const { containerStyle, categoryStyle } = styles
    
    return (
      <View style={containerStyle}>
       <Text style={categoryStyle}>{category}</Text>
      </View>
    )
}

const styles = StyleSheet.create(
  {
    containerStyle: {
      padding: 20,
    },
    categoryStyle: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }
)

export default QuizHeadline