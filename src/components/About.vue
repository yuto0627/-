<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      兵庫県西宮市出身。幅広い分野を学びたいと思い、島根県立大学総合政策学部に進学。経済や経営など幅広く学んだのち、地域政策を専攻。
    </div>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>

#aboutSection {
  background-color: #f5f5f5;
  width: 100%;
  height: auto;
  text-align: center;
}

#aboutTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 6px;
  text-align: center;
}

#aboutExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  line-height: 1.5em;
}

</style>
