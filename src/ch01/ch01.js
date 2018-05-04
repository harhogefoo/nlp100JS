const _ = require('lodash')

/// ////////////////////
// private

// 文章から不要な文字を取り除く
const excludeString = (sentence, pattern = '[,.]') => {
  const regex = new RegExp(pattern, 'g')
  return sentence.replace(regex, '')
}
// 文章から不要な文字列を取り除き、単語のリストにする
const splitSentence = sentence => excludeString(sentence).split(' ')

/// ////////////////////
// public

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

export const wordLengthList = sentence =>
  splitSentence(sentence).map(w => w.length)

export const wordLengthHash = (sentence, ...index) => {
  const result = {}
  // 各単語の先頭の2文字を抽出
  splitSentence(sentence).forEach(
    (word, i) => (result[i + 1] = word.slice(0, 2)),
  )
  // 該当する添字内の単語は1文字を抽出
  index.forEach(i => (result[i] = result[i].charAt(0)))
  return result
}

export const convertBiGramByWord = (
  sentence,
  options = {
    isFormatArray: true,
  },
) => {
  const wordList = splitSentence(sentence)
  let currentWord = wordList.shift()
  return wordList.map(word => {
    const biGram = options.isFormatArray
      ? [currentWord, word]
      : `${currentWord}-${word}`
    currentWord = word
    return biGram
  })
}

export const convertBiGramByChar = (
  sentence,
  options = {
    isFormatArray: true,
  },
) => {
  const charList = excludeString(sentence, '[,.\\s]').split('')
  let currentChar = charList.shift()
  return charList.map(char => {
    const biGram = options.isFormatArray
      ? [currentChar, char]
      : `${currentChar}-${char}`
    currentChar = char
    return biGram
  })
}

export const hasBiGram = (targetStr, ...biGramArrays) => {
  const results = biGramArrays.map(biGramArray =>
    biGramArray.includes(targetStr),
  )
  // 全てのresults内がtrueならばtrueを返す
  // 少なくとも１つfalseが存在すればfalseを返す
  return !results.includes(false)
}

export const union = (x, y) => _.union(x, y)

export const intersection = (x, y) => _.intersection(x, y)

export const difference = (x, y) => _.difference(x, y)

export const buildSentence = ({ x, y, z }) => `${x}時の${y}は${z}`

export const cipher = (diffCode = 219, pattern = '^[a-z]+$') => {
  const regex = new RegExp(pattern)
  const fn = (str) => {
    const charList = str.split('')
    const encryptedCharList = charList.map(char => {
      if (char.match(regex)) {
        return String.fromCharCode(diffCode - char.charCodeAt(0))
      } else {
        return char
      }
    })
    return encryptedCharList.join('')
  }
  return {
    encrypt: str => fn(str),
    decrypt: str => fn(str),
  }
}
