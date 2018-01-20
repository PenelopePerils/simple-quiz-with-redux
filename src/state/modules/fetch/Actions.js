import { FETCH_QUIZ, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAIL } from './ActionTypes'
import getQuestions from './../../../../Api'
import { decodeQuestions } from './../../utils'
    
export const onFetchQuestions = () => {
  
  return async dispatch => {
    dispatch({
      type: FETCH_QUIZ,
    })
    
    const promiseQuestions = await getQuestions()
    
    if (promiseQuestions.status === "success") {
        dispatch({
          type: FETCH_QUIZ_SUCCESS,
          payload: decodeQuestions(promiseQuestions.data)
        })
    } else {
      dispatch({
          type: FETCH_QUIZ_FAIL,
          payload: promiseQuestions.errorMessage
        })
    }
  }
}
