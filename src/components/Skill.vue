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
      <li><a
        id="front"
        href="#"
        rel="noopener noreferrer"
      >Font-end</a></li>
      <li><a
        id="back"
        href="#"
      >Back-end</a></li>
      <li><a
        id="DevOps"
        href="#"
      >DevOps</a></li>
    </span>
    <div id="skillList">
      <ul id="front-end">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': backChange}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul id="devops">
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div v-if="frontChange">
      <FrontChart />
    </div>
    <div v-if="backChange">
      <BackChart />
    </div>
    <div v-if="devChange" />
  </div>
</template>

<script>
import FrontChart from '../components/FrontChart.vue';
import BackChart from '../components/BackChart.vue';

export default {
    name: 'Skill',
    components: {
      FrontChart,
      BackChart
  },
  data(){
    return {
      frontChange: true,
      backChange: false,
      devChange: false
    }
  }
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

#front {
  color: #b51a1a;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  display: inline-block;
  padding-right: 1em;
  text-decoration: none;
}

#back {
  color: #0f8839;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
}

#DevOps {
  color: #571083;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  padding-left: 1em;
  text-decoration: none;
}

#front:hover {
  text-decoration: underline;
}

#back:hover {
  text-decoration: underline;
}

#DevOps:hover {
  text-decoration: underline;
}

#front-end li {
  display: inline-block;
  color: rgba(181, 26, 26, 1, 75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}

#back-end li {
  display: inline-block;
  color: rgba(15, 136, 57, 1, 75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}

#devops li {
  display: inline-block;
  color: rgba(87, 16, 131, 1, 75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}
</style>
