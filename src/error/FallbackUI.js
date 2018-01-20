import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Button } from './../components'
import { navigateWithoutBack } from './../navigation'

const FallbackUI = ({ errorMessage, navigation }) => {
    const { container, messageWrapper, icon, message } = styles

    return (
        <View style={container}>
            <View style={messageWrapper}>
              <Text style={icon}>¯\_(ツ)_/¯</Text>
              <Text style={message} numberOfLines={1}>{errorMessage.replace(/Error:/g, '')}</Text>
            </View>
            
            <Button label= 'TRY AGAIN' onPress={() => navigation.dispatch(navigateWithoutBack('Welcome'))}/>  
        </View>
    )
}

const styles = StyleSheet.create(
    {
      container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#A2E4F9',
        width: '100%',
      },
      messageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 60,
        backgroundColor: 'gray'  
      },
      icon: {
        fontSize: 60,
        color: 'white',
      },
      message: {
        fontSize: 20,
        color: 'white'
      },
    }
  )

export default FallbackUI
