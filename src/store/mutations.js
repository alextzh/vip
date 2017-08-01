import * as types from './mutation-types'

const mutations = {
  [types.SET_WORD_LIST] (state, list) {
    state.wordList = list
  },
  [types.SET_ADVICE_LIST] (state, list) {
    state.addviceList = list
  }
}

export default mutations

