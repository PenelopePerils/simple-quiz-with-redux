import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons' // 6.2.2

const ResultItem = ({ isCorrect, question }) => {

    const { containerStyle, questionStyle } = styles
    
    const iconName = isCorrect ? 'check' : 'circle-with-cross'
    const iconColor = isCorrect ? '#6FBC93' : '#D34936'
    
    return (
      <View style={containerStyle}>
       <Entypo name={iconName} size={22} color={iconColor} />
       <Text numberOfLines={1} style={questionStyle}>{question}</Text>
      </View>
    )
}

const styles = StyleSheet.create(
  {
    containerStyle: {
      flexDirection: 'row',
      paddingBottom: 3,
      alignItems: 'center',
    },
    questionStyle: {
      color: 'black',
      fontSize: 12,
      fontWeight: 'bold',
      paddingRight: 32,
    },
  }
)

export default ResultItem