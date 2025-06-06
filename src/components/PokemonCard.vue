<template>
  <div class="container">
    <img
      v-if="!showImage"
      :src="imagePlaceholder"
      alt="Imagen Pokemon no cargada"
    />
    <img v-if="showImage" :src="image" alt="Imagen Pokemon no cargada" />
    <p v-if="!showImage">{{ textPlaceholder }}</p>
    <p v-if="showImage">{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePlaceholder: "https://placehold.co/200x200/000000/000000.png",
      textPlaceholder: "XXXXXXXXX",
    };
  },

  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    showImage: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
</style>