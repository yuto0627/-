<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
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
import { mapGetters,mapActions} from 'vuex'




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
      category: 'front-end',
    }
  },
  computed: {
    ...mapGetters({
      get: 'getSkills',
    }),
  },

  mounted(){
    this.$store.dispatch('updateSkillCategories')
  },

  created() {
    this.updateSkillCategories();
  },

  methods: {
    ...mapActions(['updateSkillCategories']),

    getSkill() {
      this.get(this.categoy);
    },

    async test() {
      return await this.updateSkillCategories();
    },
  }
}
</script>

 <style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap');
</style>
