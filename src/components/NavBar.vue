<script lang="ts" setup>
const navigationLinks = [
  { label: 'Home', link: '/', id: 'home' },
  { label: 'About', link: '/about', id: 'about' },
  { label: 'Publications', link: '/publications', id: ' publications' },
  { label: 'The Pond', link: '/thepond', id: 'thepond' }
]
</script>

<template>
  <v-navigation-drawer location="top">
    <div class="d-flex flex-row">
      <v-list-item v-for="link in navigationLinks" :key="link.id">{{ link.label }}</v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<style scoped></style>
