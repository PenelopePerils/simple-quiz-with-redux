import { createStore, applyMiddleware } from 'redux' // 3.7.2
import ReduxThunk from 'redux-thunk' // 2.2.0

import RootReducer from './modules/RootReducer'

export default createStore(RootReducer, {}, applyMiddleware(ReduxThunk))