import Axios from 'axios'

export default {    
    
    state:{
        user: { username:'', token:''}
    },

    mutations:{
        setUser(state, payload){
            state.user = payload
        },

        usersRegisterM(state, payload){
            state.user = payload
        }
    },


    actions: {
        setUserLogin( { commit }){
            var username = localStorage.getItem('username');
            var token = localStorage.getItem('token')
            const userLogin = { username: username, token: token}
            commit('setUser', userLogin)
        },
    

    emailConfirmed({}, email) {
        Axios.post('http://localhost:8081/manager/email', email).then(resp => {
            const result = resp.data
        })
    },

    usersRegisterAction({ commit }, user) {
        Axios.post('http://localhost:8081/manager/user', user).then(resp => {
            const result = resp.data
            commit('usersRegisterM', result)
        })
    }

},

namespaced: true
}