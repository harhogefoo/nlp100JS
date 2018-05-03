const assert = require('assert')

const {
  reverseStr,
  explicitStr,
  concatMutually,
  wordLengthList,
  wordLengthHash,
} = require('./ch01')

describe('ch01', () => {
  describe('00. 「文字列の逆順」', () => {
    test('文字列"stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ.', () => {
      const given = 'stressed'
      const expected = 'desserts'
      assert.deepStrictEqual(reverseStr(given), expected)
    })
  })
  describe('01. 「パトカタクシーー」', () => {
    test('「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．', () => {
      const given = 'パトカタクシーー'
      const expected = 'パカクー'
      assert.deepStrictEqual(explicitStr(given, 1, 3, 5, 7), expected)
    })
  })
  describe('02. 「パトカー」＋「タクシー」＝「パタトクカシーー」', () => {
    test('「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．', () => {
      const expected = 'パタトクカシーー'
      assert.deepStrictEqual(concatMutually('パトカー', 'タクシー'), expected)
    })
  })
  describe('03. 円周率', () => {
    test('"Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."という文を単語に分解し，各単語の（アルファベットの）文字数を先頭から出現順に並べたリストを作成せよ．', () => {
      const given =
        'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.'
      const expected = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9]
      assert.deepStrictEqual(wordLengthList(given), expected)
    })
  })
  describe('04. 元素記号', () => {
    test.only(`"Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，
    1, 5, 6, 7, 8, 9, 15, 16, 19番目の単語は先頭の1文字，それ以外の単語は先頭に2文字を取り出し，取り出した文字列から単語の位置（先頭から何番目の単語か）への連想配列（辞書型もしくはマップ型）を作成せよ．`, () => {
      const given =
        'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.'
      const expected = {
        '1': 'H',
        '10': 'Ne',
        '11': 'Na',
        '12': 'Mi',
        '13': 'Al',
        '14': 'Si',
        '15': 'P',
        '16': 'S',
        '17': 'Cl',
        '18': 'Ar',
        '19': 'K',
        '2': 'He',
        '20': 'Ca',
        '3': 'Li',
        '4': 'Be',
        '5': 'B',
        '6': 'C',
        '7': 'N',
        '8': 'O',
        '9': 'F',
      }

      assert.deepStrictEqual(
        wordLengthHash(given, 1, 5, 6, 7, 8, 9, 15, 16, 19),
        expected,
      )
    })
  })
  describe('05. n-gram', () => {
    test('与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，"I am an NLPer"という文から単語bi-gram，文字bi-gramを得よ．', () => {
      assert.fail()
    })
  })
  describe('06. 集合', () => {
    test(`"paraparaparadise"と"paragraph"に含まれる文字bi-gramの集合を，それぞれ, XとYとして求め，XとYの和集合，積集合，差集合を求めよ．さらに，'se'というbi-gramがXおよびYに含まれるかどうかを調べよ．`, () => {
      assert.fail()
    })
  })
  describe('07. テンプレートによる文生成', () => {
    test('引数x, y, zを受け取り「x時のyはz」という文字列を返す関数を実装せよ．さらに，x=12, y="気温", z=22.4として，実行結果を確認せよ．', () => {
      assert.fail()
    })
  })
  describe('08. 暗号文', () => {
    test('与えられた文字列の各文字を，以下の仕様で変換する関数cipherを実装せよ．', () => {
      assert.fail()
    })
    test(`英小文字ならば(219 - 文字コード)の文字に置換、その他の文字はそのまま出力、この関数を用い，英語のメッセージを暗号化・復号化せよ．`, () => {
      assert.fail()
    })
  })
  describe('09. Typoglycemia', () => {
    test(`スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．
    ただし，長さが４以下の単語は並び替えないこととする．
    適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．`, () => {
      assert.fail()
    })
  })
})
