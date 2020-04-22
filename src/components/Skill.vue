<template>
  <div>
    <div id="skillSection">
      <div id="skillTitle">
        Skill Set
      </div>
      <div id="skillExplain">
        スキルについてまとめました。
        研修を通してフロント側のスキルはポートフォリオの実装で力がつきました。
        IT技術者としては０からのスタートであるため、まだまだ知識が足りていませんが
        まずはフロント側からバック側まで広く浅く学び、スキルを身につけていき、
        その後専門性を高めていきたいと考えています。
      </div>
      <div id="skillLink">
        GitHub：<a
          id="gitHubLink"
          href="http://github.com/yuto0627"
          target="_blank"
        >https://github.com/yuto0627</a>
      </div>
      <div id="skillCategories">
        <ul>
          <li>
            <span
              id="front"
              @click="setCurrentChart('front')"
            >Font-end</span>
          </li>
          <li>
            <span
              id="back"
              @click="setCurrentChart('back')"
            >Back-end</span>
          </li>
          <li>
            <span
              id="DevOps"
              @click="setCurrentChart('devOps')"
            >DevOps</span>
          </li>
        </ul>
      </div>
      <div id="skillList">
        <ul
          id="front-end"
          :class="{'front-change': isFrontActive}"
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>SCSS</li>
          <li>Vue</li>
        </ul>
        <ul
          id="back-end"
          :class="{'back-change': isBackActive}"
        >
          <li>Java</li>
          <li>Ruby</li>
          <li>RubyOnRails</li>
          <li>MySQL</li>
        </ul>
        <ul
          id="devops"
          :class="{'dev-change': isDevOpsActive}"
        >
          <li>Linux</li>
          <li>Node</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div id="skillGraph">
        <div v-if="isFrontActive">
          <FrontChart />
        </div>
        <div v-if="isBackActive">
          <BackChart />
        </div>
        <div v-if="isDevOpsActive">
          <DevChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontChart from '../components/FrontChart.vue';
import BackChart from '../components/BackChart.vue';
import DevChart from '../components/DevChart.vue';

export default {
    name: 'Skill',
    components: {
      FrontChart,
      BackChart,
      DevChart
  },
  data(){
    return {
      currentChart: 'front'
    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='front';
    },
    isBackActive() {
      return this.currentChart=='back';
    },
    isDevOpsActive() {
      return this.currentChart=='devOps';
    },
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
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
  padding: 10px 0;
}

#skillTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 20px;
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
  font-size: 18px;
  text-align: center;
  padding: 15px 0 10px 0;
}

#gitHubLink {
  color: #20879f;
  font-size: 18px;
  font-weight: bold;
}

li {
  display: inline-block;
}

#front {
  color: #b51a1a;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  cursor: pointer;
}

#back {
  color: #0f8839;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  padding: 5px 0 5px 0;
  font-size: 20px;
  cursor: pointer;
}

#DevOps {
  color: #571083;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-decoration: none;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  cursor: pointer;
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

.front-change li {
  background-color: rgba(221, 51, 88, 0.8);
}

.back-change li {
  background-color: rgba(15, 136, 57, 0.8);
}

.dev-change li {
  background-color: rgba(127, 73, 161, 0.8);
}

#front-end li {
  display: inline-block;
  color: rgba(181, 26, 26, 1, 75);
  height: 30px;
  font-weight: bold;
  padding: 8px 15px 2px 15px;
  box-shadow: 0 0 10px gray;
  margin: 0 5px;
}

#back-end li {
  display: inline-block;
  color: rgba(15, 136, 57, 1, 75);
  height: 30px;
  font-weight: bold;
  padding: 8px 15px 2px 15px;
  box-shadow: 0 0 10px gray;
  margin: 0 5px;
}

#devops li {
  display: inline-block;
  color: rgba(87, 16, 131, 1, 75);
  height: 30px;
  font-weight: bold;
  padding: 8px 15px 2px 15px;
  box-shadow: 0 0 10px gray;
  margin: 0 5px;
}

#skillGraph {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
