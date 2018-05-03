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

export const wordLengthList = sentences => {
  const wordList = sentences.replace(/[,.]/g, '').split(' ')
  return wordList.map(w => w.length)
}
