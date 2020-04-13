<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      ああああああああ
    </div>
    <div id="skillLink">
      GitHub：<a
        href="http://github.com/yuto0627"
        target="_blank"
      >https://github.com/yuto0627</a>
    </div>
    <span id="skillCategories">
      <li><a href="#">Font-end</a></li>
      <li><a href="#">Back-end</a></li>
      <li><a href="#">DevOps</a></li>
    </span>
  </div>
</template>

<script>
export default {
    name: 'Skill'
}
</script>

<style scoped>

#skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  text-align: center;
}

#skillTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 6px;
  text-align: center;
}

#skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  line-height: 1.5em;
  text-align: center;
}

#skillLink {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}

li {
  display: inline;
}

#skillCategories {
  color: crimson;
}

</style>
