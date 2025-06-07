<template>
  <div class="container">
    <div class="game-container" v-if="mostrarJuego">
      <div class="info">
        <span> Puntaje: {{ puntaje }}</span>
        <span> Intento: {{ intentoActual }}</span>
      </div>
      <div class="cards">
        <pokemon-card-vue
          :showImage="showImages"
          :image="image1"
          :texto="text1"
        />
        <pokemon-card-vue
          :showImage="showImages"
          :image="image2"
          :texto="text2"
        />
        <pokemon-card-vue
          :showImage="showImages"
          :image="image3"
          :texto="text3"
        />
      </div>
    </div>

      <button v-if="mostrarJuego" @click="jugar()">JUGAR</button>

    <div class="message-container" v-if="!mostrarJuego">
        <text-message-vue :gana="puntaje>= puntajeGanar" :puntaje="puntaje" :intentos="intentoActual"/>
    </div>

  </div>
</template>

<script>
import PokemonCardVue from "@/components/PokemonCard.vue";
import TextMessageVue from "@/components/TextMessage.vue";

import { conseguirPokemons } from "../clients/pokeClient.js";

export default {
  components: {
    PokemonCardVue,
    TextMessageVue,
  },
  data() {
    return {
      id1: null,
      id2: null,
      id3: null,
      image1: "",
      image2: "",
      image3: "",
      text1: "",
      text2: "",
      text3: "",

      showImages: false,

      puntaje: 0,
      intentoMax: 5,
      intentoActual: 1,

      mostrarJuego: true,

      puntajeGanar: 10
    };
  },
  methods: {
    async jugar() {
      await this.obtenerPokemons();

      this.showImages = true;
      this.calcularPuntaje();
    },
    async obtenerPokemons() {
      const pokemonsVector = await conseguirPokemons(4);
      this.image1 = pokemonsVector[0].image;
      this.text1 = pokemonsVector[0].name;
      this.id1 = pokemonsVector[0].id;

      this.image2 = pokemonsVector[1].image;
      this.text2 = pokemonsVector[1].name;
      this.id2 = pokemonsVector[1].id;

      this.image3 = pokemonsVector[2].image;
      this.text3 = pokemonsVector[2].name;
      this.id3 = pokemonsVector[2].id;
    },

    calcularPuntaje() {
      if (this.intentoActual >= this.intentoMax) {
        this.mostrarJuego = false;
      }

      if (this.id1 === this.id2 && this.id2 === this.id3) {
        this.puntaje += 5;
        this.intentoActual++;
      } else if (
        (this.id1 === this.id2 && this.id2 !== this.id3) ||
        (this.id1 !== this.id2 && this.id2 === this.id3) ||
        (this.id1 === this.id3 && this.id2 !== this.id3)
      ) {
        this.puntaje += 2;
        this.intentoActual++;
      } else {
        this.intentoActual++;
      }
    },
  },
};
</script>

<style scoped>

.container{
    margin: 0 auto;
}
.game-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info {
  display: flex;
  justify-content: space-between;
  margin: 0 128px;
  font-weight: bold;
}

.cards {
  display: flex;
  gap: 32px;
}

button{
    padding: 8px 32px;
    border: 3px solid black;
    font-weight: bold;
}
</style>