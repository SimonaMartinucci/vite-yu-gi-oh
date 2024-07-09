<script>
export default {
    name: "AppMain",
}
</script>

<template>
    <main>
        <div class="container"></div>
    </main>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    background-color: $primary;
    // DEBUG
    height: calc(100vh - 100px)  
}

</style>