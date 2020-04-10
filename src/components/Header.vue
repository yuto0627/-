<template>
  <div id="headerSection">
    <button @click="toggle" class="btn"><img src="../assets/header.png" id="headerButton"></button>
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
  name: 'Header',
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

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>

<style scoped>

#headerSection {
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
}

#headerButton {
  font-family: 'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 64px;
  height: 64px;
}
  
</style>
