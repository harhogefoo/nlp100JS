const assert = require('assert')

const {
  reverseStr,
  explicitStr,
  concatMutually,
  wordLengthList,
  wordLengthHash,
  convertBiGramByWord,
  convertBiGramByChar,
  union,
  intersection,
  difference,
  hasBiGram,
  buildSentence,
  cipher,
  typoglycemia,
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
    test(`"Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，
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
    describe('与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，"I am an NLPer"という文から単語bi-gram，文字bi-gramを得よ．', () => {
      test('単語bi-gram', () => {
        const given = 'I am an NLPer'
        const expect = [['I', 'am'], ['am', 'an'], ['an', 'NLPer']]
        assert.deepStrictEqual(convertBiGramByWord(given), expect)
      })
      test('文字bi-gram', () => {
        const given = 'I am an NLPer'
        const expect = [
          ['I', 'a'],
          ['a', 'm'],
          ['m', 'a'],
          ['a', 'n'],
          ['n', 'N'],
          ['N', 'L'],
          ['L', 'P'],
          ['P', 'e'],
          ['e', 'r'],
        ]
        assert.deepStrictEqual(convertBiGramByChar(given), expect)
      })
    })
  })
  describe('06. 集合', () => {
    describe(`"paraparaparadise"と"paragraph"に含まれる文字bi-gramの集合を，それぞれ, XとYとして求め，XとYの和集合，積集合，差集合を求めよ．さらに，'se'というbi-gramがXおよびYに含まれるかどうかを調べよ．`, () => {
      describe('文字bi-gram', () => {
        test('文字bi-gram: paraparaparadise', () => {
          const given = 'paraparaparadise'
          const expect = [
            'p-a',
            'a-r',
            'r-a',
            'a-p',
            'p-a',
            'a-r',
            'r-a',
            'a-p',
            'p-a',
            'a-r',
            'r-a',
            'a-d',
            'd-i',
            'i-s',
            's-e',
          ]

          assert.deepStrictEqual(
            convertBiGramByChar(given, { isFormatArray: false }),
            expect,
          )
        })
        test('文字bi-gram: paragraph', () => {
          const given = 'paragraph'
          const expect = [
            'p-a',
            'a-r',
            'r-a',
            'a-g',
            'g-r',
            'r-a',
            'a-p',
            'p-h',
          ]
          assert.deepStrictEqual(
            convertBiGramByChar(given, { isFormatArray: false }),
            expect,
          )
        })
      })
      describe('集合', () => {
        let x
        let y
        beforeEach(() => {
          x = convertBiGramByChar('paraparaparadise', { isFormatArray: false })
          y = convertBiGramByChar('paragraph', { isFormatArray: false })
        })
        test('和集合', () => {
          const given = union(x, y)
          const expect = [
            'p-a',
            'a-r',
            'r-a',
            'a-p',
            'a-d',
            'd-i',
            'i-s',
            's-e',
            'a-g',
            'g-r',
            'p-h',
          ]
          assert.deepStrictEqual(given, expect)
        })
        test('積集合', () => {
          const given = intersection(x, y)
          const expect = ['p-a', 'a-r', 'r-a', 'a-p']
          assert.deepStrictEqual(given, expect)
        })
        test('差集合', () => {
          const given = difference(x, y)
          const expect = ['a-d', 'd-i', 'i-s', 's-e']
          assert.deepStrictEqual(given, expect)
        })
        test(`seというbi-gramがXおよびYに含まれるかどうか調べる(Yにseが含まれていない)`, () => {
          const given = hasBiGram('s-e', x, y)
          assert.deepStrictEqual(given, false)
        })
        test(`seというbi-gramがXおよびYに含まれるかどうか調べる(Yにseが含まれている)`, () => {
          const given = hasBiGram('s-e', x, x)
          assert.deepStrictEqual(given, true)
        })
      })
    })
  })
  describe('07. テンプレートによる文生成', () => {
    describe('引数x, y, zを受け取り「x時のyはz」という文字列を返す関数を実装せよ．さらに，x=12, y="気温", z=22.4として，実行結果を確認せよ．', () => {
      test('12時の気温は22.4', () => {
        const given = buildSentence({ x: '12', y: '気温', z: '22.4' })
        const expect = '12時の気温は22.4'
        assert.deepStrictEqual(given, expect)
      })
      test('暑い時の私は汗をかく', () => {
        const given = buildSentence({ x: '暑い', y: '私', z: '汗をかく' })
        const expect = '暑い時の私は汗をかく'
        assert.deepStrictEqual(given, expect)
      })
    })
  })
  describe('08. 暗号文', () => {
    describe('与えられた文字列の各文字を，以下の仕様で変換する関数cipherを実装せよ．', () => {
      describe(`英小文字ならば(219 - 文字コード)の文字に置換、その他の文字はそのまま出力、この関数を用い，英語のメッセージを暗号化・復号化せよ．`, () => {
        test('暗号化', () => {
          const given = cipher().encrypt('hogehoge123')
          const expect = 'sltvsltv123'
          assert.deepStrictEqual(given, expect)
        })
        test('復号化', () => {
          const given = cipher().decrypt('sltvsltv123')
          const expect = 'hogehoge123'
          assert.deepStrictEqual(given, expect)
        })
      })
    })
  })
  describe('09. Typoglycemia', () => {
    describe('スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．', () => {
      test(`適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．`, () => {
        const given = typoglycemia('I am abcde .')
        const expectedPattern = [
          'I am abcde .',
          'I am abdce .',
          'I am adbce .',
          'I am adcbe .',
          'I am acbde .',
          'I am acdbe .',
        ]
        assert.deepStrictEqual(expectedPattern.includes(given), true)
      })
    })
  })
})
