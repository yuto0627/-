<template>
  <div id="drawerSection">
    <label for="nav-input">
      <img
        id="drawerButton"
        src="../assets/close.png"
      >
    </label>
    <div>
      <ul id="drawerMenu">
        <h1>Menu</h1>
        <li @click="closeMenu">
          <a
            href="#headerSection"
            @click="clickSmoothScroll()"
          >Home</a>
        </li>
        <li @click="closeMenu">
          <a
            href="#aboutSection"
            @click="clickSmoothScroll()"
          >About Me</a>
        </li>
        <li @click="closeMenu">
          <a
            href="#skillSection"
            @click="clickSmoothScroll()"
          >Skill Set</a>
        </li>
        <li @click="closeMenu">
          <a
            href="#visionSection"
            @click="clickSmoothScroll()"
          >Vision</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      closeMenu() {
        this.$emit('close')
      },
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        null,
        null,
        'y'
      )
    },
  }
}

</script>

<style scoped>
#drawerMenu {
  padding: 15px;
}

#drawerButton {
  width: 40px;
  height: 40px;
  margin: 0 0 0 160px;
}

h1 {
  font-weight: bold;
  text-align: center;
  color: #fff;
}

li {
  display: inline;
}

li a {
  display: block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-size: 24px;
  border-bottom: 2px solid #fff;
  position: relative;
  text-decoration: none;
  top: 10px;
  padding: 10px;
}

li a:hover {
  background-color: #474655;
}
</style>
