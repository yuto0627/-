<template>
  <div id="drawerSection">
    <div>
      <ul id="drawerMenu">
        <h1>Menu</h1>
        <li>
          <a
            href="#"
            @click="Top()"
          >Home</a>
        </li>
        <li>
          <a
            href="#"
            @click="About()"
          >About Me</a>
        </li>
        <li>
          <a
            href="#"
            @click="Skill()"
          >Skill Set</a>
        </li>
        <li>
          <a
            href="#"
            @click="Vision()"
          >Vision</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    Top () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    },
    About () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#aboutSection'),
        400,
        null,
        null,
        'y'
      )
    },
    Skill () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skillSection'),
        400,
        null,
        null,
        'y'
      )
    },
    Vision () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#visionSection'),
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

h1 {
  font: bold;
  text-align: center;
}

li {
  display: inline;
}

li a {
  display: block;
  border-left: 8px solid #474655;
  border-top: 1px solid #474655;
  border-right: 1px solid #474655;
  border-bottom: 1px solid #474655;
  background-color: #fff;
  padding: 3px 10px;
  text-decoration: none;
  color: #333;
  width: 150px;
  margin: 1px 0;
  text-align: left;
  font-size: 20px;
}

li a:hover {
  border-left: 8px solid #474655;
  border-top: 1px solid #474655;
  border-right: 1px solid #474655;
  border-bottom: 1px solid #474655;
  background-color: #d7efd7;
}
</style>
