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
  text-align: center;
}

#userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 8px #000;
  display: inline-block;
  padding: 10px 0;
  border-bottom: 4px solid #fff;
}

#companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 8px #000;
  padding: 3px 0;
}

#profilePicture {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: block;
  margin: auto;
  padding: 0 0 10px 0;
}

</style>
