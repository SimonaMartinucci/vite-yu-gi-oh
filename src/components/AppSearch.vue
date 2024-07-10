<script>
import { store } from '../store';

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="sel-cont">
        <select v-model="store.selection" @change="$emit('filter')">
        <option value="">Trova un archetipo</option>
        <option v-for="archetype in store.archeTypes" :key="archetype" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
        </option>
    </select>
    </div>
</template>
    

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.sel-cont {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 30px;
}

</style>