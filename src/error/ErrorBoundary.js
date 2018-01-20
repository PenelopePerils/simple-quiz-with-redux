import React, { Component } from 'react'
import { View, Text } from 'react-native'

import logErrorToDevService from './logErrorToDevService'

class ErrorBoundary extends Component {
 
  state = { hasError: false, errorMessage: undefined }
    
  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error.toString() })

    logErrorToDevService(error, info)
  }
  
  render() {

    const { hasError, errorMessage } = this.state
    const { FallbackComponent, children, navigation } = this.props
    if (hasError) {
      return <FallbackComponent errorMessage={errorMessage} navigation={navigation}/>
    } 
    
    return children
  }
}
  
export default ErrorBoundary
