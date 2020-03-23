import { fetchLogin } from '@/utils/api'

const userStore = {
  namespaced: true,
  state: {
    userinfo: {
      username: '1917'
    }
  },
  mutations: {
    updateUserinfo(state, payload) {
      state.userinfo = payload
    }
  },
  actions: {
    userLogin(store,data) {
     fetchLogin(data).then(res=>{
       console.log('user module',res)
       store.commit('updatedUserinfo',res)
     })
    }
  }
}

export default userStore
