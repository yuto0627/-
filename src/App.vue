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



export default {
  name: 'App' ,
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
  },
  methods: {
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
