import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({

  //state:コンポーネントでいうdata
  state: {
    skillCategories:[]
  },

  //getters:コンポーネントでいうcomputed的なもの
  getters:{
    //messageを使用するgetter
    getSkills: (state) => (category) => {
      if (state.skillCategories.lengh > 0) {
        return state.skillCategories.find((skill) => skill.category===category)
      }
      return [];
     },
  },

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setSkillCategories(state,payload){
      state.skillCategories = payload.skillCategories
    }
  },

  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await axios.get('https://us-central1-yutoishida-92d5f.cloudfunctions.net/skills');
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    }
 }
})

