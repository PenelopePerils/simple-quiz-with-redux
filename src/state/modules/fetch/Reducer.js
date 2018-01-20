import { FETCH_QUIZ, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAIL } from './ActionTypes'

const INITIAL_STATE = {
  questions: [ ],
  numberOfQuestions: 0,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_QUIZ:
      return { ...INITIAL_STATE }
    case FETCH_QUIZ_SUCCESS:
      return {
        ...INITIAL_STATE,     
        questions: action.payload,
        numberOfQuestions: action.payload.length,
      }
    case FETCH_QUIZ_FAIL:
      return {
        ...INITIAL_STATE,
      }
    default:
      return state
  }
}
