<template>
  <div id="headersection">
    <button @click="toggle" class="btn btn-success"><img src="../assets/header.png" id="headerButton"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">
          <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";

export default {
  name: 'heder',
  components: {
    Drawer
  },
  date() {
    return {
      open: false 
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 150px;
  margin: 0 auto;
  width: 800px;
}
</style>
