<script>
export default {
    name: "AppMain",
}
</script>

<template>
    <main>
        <div class="container">
            
        </div>
    </main>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    background-color: $primary;
    padding: 80px 0;
    // DEBUG
    height: calc(100vh - 100px);

    .container {
        background-color: white;
        width: 80%;
        margin: 0 auto;
        padding: 40px 0;
        // DEBUG 
        height: 300px;
    }
}

</style>