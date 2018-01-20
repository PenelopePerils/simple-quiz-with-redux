import React from 'react'
import { View, StyleSheet } from 'react-native'

import Button from './Button'

const Answer = ({ onPress }) => {

    const { containerStyle } = styles
    
    return (
      <View style={containerStyle}>
         <Button label='FALSE' onPress={() => onPress("False")}/>
         <Button label= 'TRUE' onPress={() => onPress("True")}/>
       </View>
    );
}

const styles = StyleSheet.create(
  {
    containerStyle: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around'
    },
  }
)

export default Answer


