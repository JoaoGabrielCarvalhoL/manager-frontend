import state from './state'
import mutations from './mutations'
import * as mutationsType from './mutation-types'
import * as actions from './actions'

export default {
    state, 
    mutations,
    mutationsType, 
    actions, 
    namespaced:true
}