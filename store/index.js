import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		historyList: uni.getStorageSync("_history") || [],
		userinfo: uni.getStorageSync('USERINFO') || {},
	},
	mutations: {
		setHistoryList(state,history){
			state.historyList = history
		},
		clearHistoryList(state){
			state.historyList = [] 
		},
		setUserInfo(state, userinfo) {
			state.userinfo = userinfo
		},
	},
	actions: {
		setUserinfo({
					commit
				}, userinfo) {
					uni.setStorageSync('USERINFO', userinfo)
					commit('setUserInfo', userinfo)
		},
		setHistory({commit,state},history){
			let list = state.historyList
			list.unshift(history)
			uni.setStorageSync('_history', list)
			commit('setHistoryList',list)
		},
		clearHistory({commit,state}){
			uni.removeStorageSync('_history')
			commit('clearHistoryList')
		}
	}
})
export default store