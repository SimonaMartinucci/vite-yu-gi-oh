<script>
import SingleCard from './SingleCard.vue'
import { store } from '../store';

export default {
    name: "AppCards",
    components: {
        SingleCard,
    },
    data() {
    return {
      store,
    }
  }
}
</script>

<template>
    <div class="container">
        <div class="cards-cont">
            <div v-for="card in store.cardsList" :key="card.id" class="card">
                <SingleCard :info="card" />
            </div>
        </div>
    </div>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
        background-color: white;
        width: 80%;
        margin: 0 auto;
        padding: 40px 0;

        .cards-cont {
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            gap: 15px;
            flex-wrap: wrap;

            .card {
            width: calc((100% / 5) - 15px);
            background-color: $primary;
            text-align: center;
            }
}
    }
</style>