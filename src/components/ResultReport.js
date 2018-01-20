import React from 'react'
import { View, StyleSheet } from 'react-native'

import ResultItem from './ResultItem'

const ResultReport = ({ results }) => {

    const { containerStyle } = styles
    
    return (
      <View style={containerStyle}>
       {results.map(item => (
         <ResultItem key={item.question} isCorrect={item.isCorrect} question={item.question} />
       ))}
      </View>
    )
}

const styles = StyleSheet.create(
  {
    containerStyle: {
      padding: 10,
    },
  }
)

export default ResultReport