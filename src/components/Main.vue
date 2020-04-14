<template>
  <div id="mainSection">
    <div id="userName">
      Yuto.Ishida
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img
      id="profilePicture"
      src="../assets/profile.jpg"
    >
  </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style scoped>

#mainSection {
  background: linear-gradient(to bottom, #80e1f7 50%, #06c1e6 100%);
  width: 100%;
  height: auto;
}

#userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 8px #000;
  text-align: center;
  border-bottom: 3px solid #fff;
}

#companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 8px #000;
  text-align: center;
}

#profilePicture {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: block;
  margin: auto;
}

</style>
