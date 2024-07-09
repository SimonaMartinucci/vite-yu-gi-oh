<script>
import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use '../src/styles/partials/variables' as *;
@use '../src/styles/general.scss' as *;

</style>
