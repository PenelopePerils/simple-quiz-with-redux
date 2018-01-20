import { ON_ANSWER, RESET_TO_PLAY_AGAIN } from './ActionTypes'

export const resetToPlayAgain = () => {
  
  return dispatch => {
    dispatch({
      type: RESET_TO_PLAY_AGAIN,
    })
  }
}

export const onAnswer = (answer) => {
  
  return dispatch => {
    dispatch({
      type: ON_ANSWER,
      payload: resolve(answer),
    })
  }
}

const resolve = (answer)  => {
  
    const { question, correct_answer } = answer.question
    const isCorrect = correct_answer === answer.chosen_option
  
  return { question, isCorrect }
}