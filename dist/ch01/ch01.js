'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
const reverseStr = (exports.reverseStr = str => {
  return str
    .split('')
    .reverse()
    .join('')
})

const explicitStr = (exports.explicitStr = (str, ...index) => {
  return index.map(i => str[i - 1]).join('')
})

const concatMutually = (exports.concatMutually = (str1, str2) => {
  let result = ''
  str1.split('').forEach((s, i) => (result += s + str2[i]))
  return result
})

const wordLengthList = (exports.wordLengthList = sentences => {
  const wordList = sentences.replace(/,|\./g, '').split(' ')
  return wordList.map(w => w.length)
})
