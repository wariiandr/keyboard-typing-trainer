import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: {
      id: '',
      username: '',
      gameIds: []
    }
  },
  actions: {
    async fetchUser(ctx, token) {
      const res = await fetch('http://localhost:3000/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const user = await res.json();

      ctx.commit('updateUser', user);
    }
  },
  mutations: {
    updateToken(state, payload) {
      state.token = payload;
    },
    updateUser(state, payload) {
      state.user = {
        ...state.user,
        id: payload._id,
        username: payload.username,
        gameIds: payload.game_ids
      };
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
})
