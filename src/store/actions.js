import * as types from './mutation-types'

export const insertWord = function ({commit, state}, word) {
  let wordList = state.wordList.slice()
  wordList.unshift(word)
  commit(types.SET_WORD_LIST, wordList)
}

export const insertAdvice = function ({commit, state}, advice) {
  let adviceList = state.addviceList.slice()
  adviceList.unshift(advice)
  commit(types.SET_ADVICE_LIST, adviceList)
}
