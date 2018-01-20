import { asyncTypesFactory } from './../../utils'

const featchQuizTypes = asyncTypesFactory('quiz/FETCH_QUIZ')

const [
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAIL
] = featchQuizTypes;

export { FETCH_QUIZ, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAIL }
