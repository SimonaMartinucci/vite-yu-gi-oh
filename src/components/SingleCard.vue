<script>
export default {
    name: "SingleCard",
    props: ['info'],
}
</script>

<template>
    <img :src="info.card_images[0].image_url" alt="">
    <h4>{{ info.name }}</h4>
    <h5>{{ info.type }}</h5>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

img {
    width: 100%;
}

h4 {
    color: white;
    font-size: 20px;
    font-weight: 600;
    padding: 15px 10px;
}

h5 {
    font-size: 15px;
    font-weight: lighter;
    padding-bottom: 25px
}

</style>