<script lang="ts" setup>
const navigationLinks = [
  { label: 'Home', link: '/', id: 'home' },
  { label: 'Past/ Present me', link: '/about', id: 'about' },
  { label: 'Publications', link: '/publications', id: ' publications' },
  { label: 'The Pond', link: '/thepond', id: 'thepond' }
]
</script>

<template>
  <v-navigation-drawer
    location="top"
    mobile-breakpoint="xs"
    width="auto"
    elevation="1"
    disable-route-watcher
    class="border-0"
  >
    <div class="navigation-container d-flex justify-center ga-6 pt-2 pb-2">
      <v-list-item
        v-for="link in navigationLinks"
        :key="link.id"
        :to="link.link"
        :active="false"
        class="text-lg-h6 text-md-body-2"
        >{{ link.label }}</v-list-item
      >
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer {
  height: auto;
  border-bottom: 0;
}

.v-navigation-drawer {
  background-color: rgba(var(--v-theme-surface-light));
}
.navigation-container {
  flex-shrink: 0;
}
</style>
