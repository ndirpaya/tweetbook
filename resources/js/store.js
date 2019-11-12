import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: []
    },

    getters: {
        posts (state) {
            return state.posts
        }
    },

    mutations: {
        SET_POSTS (state, posts) {
            state.posts = posts
        }
    },

    actions: {
        async getPosts ({ commit }) {
            let posts = await Axios.get('api/posts')


            commit('SET_POSTS', posts.data.data)
        }
    }
})