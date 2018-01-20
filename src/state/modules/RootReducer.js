import { combineReducers } from 'redux' // 3.7.2

import { AnswerReducer } from './answer'
import { FetchReducer } from './fetch'
import { StatusReducer } from './status'


import { RESET_TO_PLAY_AGAIN } from './AllActionTypes'


const appReducer = combineReducers({
  fetchQuestion: FetchReducer, 
  answer: AnswerReducer,
  status: StatusReducer,
})

const rootReducer = (state, action) => {
  if (action.type === RESET_TO_PLAY_AGAIN) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer