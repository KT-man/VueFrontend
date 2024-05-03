<script lang="ts" setup>
const navigationLinks = [
  { label: 'Home', link: '/', id: 'home' },
  { label: 'About', link: '/about', id: 'about' },
  { label: 'Publications', link: '/publications', id: ' publications' },
  { label: 'The Pond', link: '/thepond', id: 'thepond' }
]
</script>

<template>
  <v-navigation-drawer location="top" style="height: auto" mobile-breakpoint="xs">
    <div class="navigation-container">
      <v-list-item v-for="link in navigationLinks" :key="link.id" :to="link.link">{{
        link.label
      }}</v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer {
  height: auto;
  background-color: rgb(var(--v-theme-primary));
}

.navigation-container {
  display: flex;
  justify-content: center;
}
</style>
