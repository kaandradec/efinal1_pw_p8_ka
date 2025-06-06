<template>
  <div class="container">
    <pokemon-card-vue :showImage="false" :image="image1" :text="text1" />
    <pokemon-card-vue :showImage="false" :image="image1" :text="text1" />
    <pokemon-card-vue :showImage="false" :image="image1" :text="text1" />
  </div>
  <button @click="obtenerPokemons">JUGAR</button>
</template>

<script>
import PokemonCardVue from "@/components/PokemonCard.vue";

import { conseguirPokemons } from "../clients/pokeClient.js";

export default {
  components: {
    PokemonCardVue,
  },
  data() {
    return {
      image1: null,
      image2: null,
      image3: null,
      text1: null,
      text2: null,
      text3: null,
    };
  },
  methods: {
    async obtenerPokemons() {
      const pokemonsVector = await conseguirPokemons(4);
      console.log(pokemonsVector)
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 32px;
}
</style>