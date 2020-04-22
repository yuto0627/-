import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({

  //state:コンポーネントでいうdata
  state: {
    skillCategories:[],
    loaded: false
  },


  getters:{
    getSkills: (state) => (category) => {
      /* eslint-disable no-debugger */
      debugger
      if(state.skillCategories.length > 0) {
        return state.skillCategories.find((skill) => skill.category===category);
      }
      return [];
     },
  },

  mutations: {
    setSkillCategories(state,payload){
      state.skillCategories = payload.skillCategories;
      state.loaded = true
    },
  },

  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await axios.get('https://us-central1-yutoishida-92d5f.cloudfunctions.net/skillCategories');
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    }
  }
})

