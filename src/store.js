import { reactive } from "vue";

export const store = reactive({
    cardsList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0",
    selection: '',
    archeTypes: [],
    apiArchetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    searchPar: 'archetype',
});