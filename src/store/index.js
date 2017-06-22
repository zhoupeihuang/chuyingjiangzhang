import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state ={
	Mytoken: 0,
	MyuserId:0 
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
