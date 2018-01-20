import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

const Button = (props) => {
    const { textStyle, viewStyle } = styles
    
    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={viewStyle}>
         <Text style={textStyle}>{props.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = {
  viewStyle: {
    padding: 20,
    backgroundColor: '#6BC1E9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},

  textStyle: {
    fontSize: 30,
    color: 'white',
  },
}

export default Button
