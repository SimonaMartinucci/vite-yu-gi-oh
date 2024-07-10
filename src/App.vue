<script>
import axios from 'axios';

import AppHeader from '../src/components/AppHeader.vue'
import AppCards from '../src/components/AppCards.vue'
import AppSearch from '../src/components/AppSearch.vue'

import { store } from './store';

export default {
  components: {
    AppHeader,
    AppCards,
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // metodo per recuperare da API img-nomi-tipo delle carte
    getCards() {
      let endPoint = store.apiURL;

      if(store.selection !== '') {
        endPoint += `&archetype=${store.selection}`
      }

      axios.get(endPoint)
      .then(res => {
        store.cardsList = res.data.data;
      })
      .catch(err => {
        console.log(err);
      })
    },

    // metodo per recuperare da API archetipi carte
    getArchetypes() {
      axios.get(store.apiArchetypes)
      .then(res => {
        store.archeTypes = res.data;
      })
    }
  },
  created() {
    this.getCards();
    this.getArchetypes();
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <AppSearch @filter="getCards()" />
    <AppCards />
  </main>

</template>

<style lang="scss">
@use '../src/styles/partials/variables' as *;
@use '../src/styles/general.scss' as *;

main {
  background-color: $primary;
  padding: 30px 0 80px;
}

</style>
