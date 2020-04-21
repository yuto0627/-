<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <input
      type="text"
      :value="skillCategories"
      @input="updateSkillCategories"
    >
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'



export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
  },
  data() {
    return {
      skills: []
    }
  },
  computed: {
    skillCategories(){
      return this.$store.getters.skillCategories
    },
    ...mapGetters({
      get: 'getSkills',
    }),
  },
  mounted() {
    this.updateSkillCategories();
  },
  methods: {
    updateSkillCategories(event){
      this.$store.dispatch('updateSkillCategories',event.target.value)
    },
    ...mapActions(['updateSkillCategories']),

    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-portfolio-4f0fc.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
    console.log(items)
    },
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#Header'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

 <style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap');
</style>
