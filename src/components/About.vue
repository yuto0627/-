<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      兵庫県西宮市出身。
      小学生から大学までサッカー部として約15年間続けてきました。
      大学では島根県立大学総合政策学部に進学し、様々な分野を幅広く学んだのち、
      地域政策を専攻してました。
      大学生活残り１年はNPO法人キャリア支援団体でキャリア支援活動を行い、
      チームリーダーを経験しました。チームのマネジメントだけではなく、イベントの企画、運営や約30人の後輩を担当しキャリア面談などを行ってきました。
      誰かのために全力で物事に取り組むことで自分の成長にも繋がることを実感しました。
      これからも視野を広く持ちながら、何事にも挑戦していきたいと思います。
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
  padding: 10px 0;
}

#aboutTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 20px;
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
