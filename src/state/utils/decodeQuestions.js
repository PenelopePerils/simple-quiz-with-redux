import he from 'he' // 1.1.1

function decode(text) {
  return he.decode(text)
}


export default function decodeQuestions(array) {
  let decodedArray = [ ]
  
  array.map((item) => {
    decodedArray = [ ...decodedArray, { ...item, question: decode(item.question)} ]
  })
  
  return decodedArray
}