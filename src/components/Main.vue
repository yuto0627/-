<template>
    <div id="mainSection">
        <div id="userName">Y.Ishida</div>
        <div id="companyName">Seattleconsulting</div>
        <img src="../assets/profile.jpg" id="profilePicture">

    </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style scoped>

#mainSection {
    background: linear-gradient(to bottom, #80E1F7 50%,#06C1E6 100%);
    width: 100%;
    height: auto;
}

#userName {
    color: #FFFFFF;
    font: Noto Sans ;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 8px #000000;
    text-align: center;
    border-bottom: 3px solid #FFFFFF;
}

#companyName {
    color: #FFFFFF;
    font: Noto Sans ;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 8px #000000;
    text-align: center;
}

#profilePicture {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: block;
    margin: auto;
}



</style>
