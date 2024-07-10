<script>
import axios from 'axios';
import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.
        get(store.apiURL)
        .then(res => {
          console.log(res.data.data);
          store.cardsList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCards();
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
