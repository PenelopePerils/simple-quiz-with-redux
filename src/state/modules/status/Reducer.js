import { FETCH_QUIZ, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAIL } from './../AllActionTypes'

const INITIAL_STATE = {
  hasError: false,
  errorMessage: undefined,
  isLoading: true,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_QUIZ:
      return { ...INITIAL_STATE }

    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false
      }

    case FETCH_QUIZ_FAIL:
      return {
        ...INITIAL_STATE,
        hasError: true,
        errorMessage: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
