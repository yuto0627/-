<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      兵庫県西宮市出身。島根県立大学総合政策学部に進学し、経済や経営など幅広く学んだのち、地域政策を専攻。都市部から地方に出たことにより地方の良さや課題を痛感した。大学４年の約１年間NPO法人キャリア支援団体でキャリア支援活動を行い、チームリーダーを経験。イベントの企画、運営や約30人の後輩を担当しキャリア面談などを行ってきた。誰かのために全力で物事に取り組むことで自分の成長にも繋がることを実感した。これからも失敗を恐れず何事にも挑戦していきたい。
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
