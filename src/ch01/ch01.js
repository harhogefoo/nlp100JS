export const reverseStr = str => {
  return str
    .split('')
    .reverse()
    .join('')
}

export const explicitStr = (str, ...index) => {
  return index.map(i => str[i - 1]).join('')
}

export const concatMutually = (str1, str2) => {
  let result = ''
  str1.split('').forEach((s, i) => (result += s + str2[i]))
  return result
}

export const wordLengthList = sentence => {
  const wordList = sentence.replace(/[,.]/g, '').split(' ')
  return wordList.map(w => w.length)
}

export const wordLengthHash = (sentence, ...index) => {
  const wordList = sentence.replace(/[,.]/g, '').split(' ')
  const result = {}
  wordList.forEach((word, i) => {
    result[i + 1] = word.slice(0, 2)
  })
  index.forEach(i => {
    result[i] = result[i].charAt(0)
  })
  return result
}
