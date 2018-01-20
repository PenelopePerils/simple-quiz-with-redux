const config = {
  amount: 10,
  difficulty: 'hard',
  type: 'boolean',
}

const baseUri = 'https://opentdb.com/api.php'
const defaultErrorMessage = 'Sorry, something went wrong.'


export default function getQuestions() {
  
  const { amount, difficulty, type } = config
  const from = `${baseUri}?amount=${amount}&difficulty=${difficulty}&type=${type}`
  
  return fetch(from)
      .then(response => response.json())
      .then(responseJson => ({ status: 'success', data: responseJson.results }))
      .catch(() => ({ status: 'fail', errorMessage: defaultErrorMessage }))
}