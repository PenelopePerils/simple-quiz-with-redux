import React from 'react'

import ErrorBoundary from './ErrorBoundary'
import FallbackUI from './FallbackUI'


const withErrorBoundary = (Component, FallbackComponent = FallbackUI) => props => {
    return (
        <ErrorBoundary FallbackComponent={FallbackComponent} navigation={props.navigation}>
            <Component {...props} />
        </ErrorBoundary>
    )
}

export default withErrorBoundary