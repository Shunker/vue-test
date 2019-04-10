import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    weather: []
  },
  mutations: {
    increase (state) {
      state.count++
    },
    getWeather () {
      let api = 'https://www.tianqiapi.com/api/?version=v1&cityid=101110101'
      fetch(api).then((res) => {
        return res.json()
      }).then((result) => {
        console.log(result.data)
        this.state.weather = result.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  actions: {
    getWeather ({ commit }) {
      commit('getWeather')
    }
  }
})
