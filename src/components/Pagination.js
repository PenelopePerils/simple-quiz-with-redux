import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Pagination = ({ current, total }) => {

    const { paginationStyle } = styles
    
    return (
      <Text style={paginationStyle}>{`${current} of ${total}`}</Text>
    );
}

const styles = StyleSheet.create(
  {
    paginationStyle: {
      color: 'black',
      fontSize: 25,
    },
  }
)

export default Pagination