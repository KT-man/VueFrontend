<script setup lang="ts">
const imageUrl = import.meta.env.VITE_IMAGE_URL
</script>

<template>
  <v-container fluid>
    <v-img :lazy-src="imageUrl" :src="imageUrl" alt="Home Picture" cover />
    <v-col md-6>
      <v-card>
        <v-card-title>Hello!</v-card-title>
        <v-card-text></v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<style scoped>
div {
}

.v-container {
  max-width: 1200px;
  min-width: 450px;
  margin: 0 auto;
}
</style>
