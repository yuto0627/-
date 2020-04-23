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
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillCategories';
      const res = await axios.get(functionsUrl);
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    }
  }
})

