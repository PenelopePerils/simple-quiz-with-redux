import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const Spinner = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#D34936" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#A2E4F9',
        width: '100%',
    }, 
})

export default Spinner