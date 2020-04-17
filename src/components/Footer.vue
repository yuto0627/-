<template>
  <div id="footerSection">
    <div id="footerCopyright">
      ©︎Seattleconsulting
    </div>
    <a
      href="#"
      @click="clickSmoothScroll()"
    >
      <img
        id="footerScroll"
        src="../assets/scroll.jpeg"
      >
    </a>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}

</script>

<style scoped>

#footerSection {
  background: linear-gradient(to bottom, #80e1f7 50%, #06c1e6 100%);
  width: 100%;
  height: 60px;
  text-align: center;
}

#footerCopyright {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 2px 2px 8px #000;
  padding: 30px 50px 0 50px;
}

#footerScroll {
  border-radius: 50%;
  position: relative;
  top: -55px;
  width: 30px;
}

</style>
