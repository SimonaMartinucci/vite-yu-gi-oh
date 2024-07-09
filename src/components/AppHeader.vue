<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="https://1000logos.net/wp-content/uploads/2024/02/Yu-Gi-Oh-Logo-2001.png" alt="logo">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    background-color: white;
    height: 100px;
    display: flex;
    align-items: center;

    .logo {
        margin: 20px;
        height: 60px;

        img {
            max-height: 100%;
        }
    }
}

</style>