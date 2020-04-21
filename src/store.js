import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  //state:コンポーネントでいうdata
  state: {
    chart: '初期メッセージ'
  },

  //getters:コンポーネントでいうcomputed的なもの
  getters:{
    //messageを使用するgetter
    chart(state) {
      return state.chart
    }
  },

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setMessage(state,payload){
      state.chart = payload.chart
    }
  },

  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    doUpdate({commit}, chart){
      commit('setMessage',{chart})
    }
  }
})
export default store
