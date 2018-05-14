import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import booksState from './state.js'
import booksMutation from './mutation.js'
import booksAction from './action.js'

export default new Vuex.Store({
    state:{
        booksState
    },
    mutations:{
        ...booksMutation
    },
    actions:{
        ...booksAction
    }
})