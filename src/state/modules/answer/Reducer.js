import { ON_ANSWER } from './ActionTypes'

const INITIAL_STATE = {
  counter: 0,
  results: [ ],
  score: 0,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_ANSWER:
      return {
        ...state,
        counter: state.counter + 1,
        results: [ ...state.results, action.payload ],
        score: action.payload.isCorrect ? state.score + 1 : state.score,
      }
    default:
      return state
  }
}
