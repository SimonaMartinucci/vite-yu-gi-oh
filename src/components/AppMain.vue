<script>
import AppCards from './AppCards.vue'

export default {
    name: "AppMain",
    components: {
        AppCards,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <AppCards/>
        </div>
    </main>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    background-color: $primary;
    padding: 80px 0;

    .container {
        background-color: white;
        width: 80%;
        margin: 0 auto;
        padding: 40px 0;
    }
}

</style>