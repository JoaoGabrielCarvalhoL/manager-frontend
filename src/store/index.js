import Vuex from 'vuex'
import { store as products } from './../views/products'
import { store as categories } from './../views/categories'
import { store as user } from './../views/login'

const store = new Vuex.Store({
  modules: {
    categories, 
    products, 
    user
  }
})

export default store
