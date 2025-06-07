<template>
  <div class="container">
    <div v-if="gana" class="gana">
      <p>Puntaje: {{ puntaje }}</p>
      <p>Felicitaciones ha ganado un precio de $10.000,00</p>
    </div>
    <div v-if="!gana" class="pierde">
      <p>Ha utilizado sus {{ intentos }} intentos</p>
      <p>El juego a terminado, inténtelo otra vez</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    intentos: {
      type: Number,
      required: true,
    },
    puntaje: {
      type: Number,
      required: true,
    },
    gana: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped>
p{
    font-weight: bold;
    font-size: larger;
}
.gana > p{
    color: blue;
}

.pierde > p{
    color: red;
}
</style>