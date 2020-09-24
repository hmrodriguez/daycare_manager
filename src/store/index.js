import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ADD_EVENT = 'ADD_EVENT'

const events = {
  state: { events: [] },
  mutations: {
    ADD_EVENT (state, event) {
      state.events.push(event)
    }
  },
  actions: {
    addEvent ({ commit }, payload) {
      commit(ADD_EVENT, payload)
    }
  },
  getters: {
    events: state => state.events
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    events
  }
})
