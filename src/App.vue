<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/LayoutComponents/NavBar.vue'
import FooterBar from './components/LayoutComponents/FooterBar.vue'

const navTitle = 'Learning how to vue'
</script>

<template>
  <v-app>
    <v-theme-provider>
      <NavBar :navBarTitle="navTitle" />
      <v-main>
        <RouterView></RouterView>
      </v-main>
      <FooterBar></FooterBar>
    </v-theme-provider>
  </v-app>
</template>

<style scoped>
.v-app {
  font-family: Garamond, 'Times New Roman', serif;
}

.v-main {
  /* margin top to account for navBar height + padding  */
  margin-top: 56px;
  background-color: rgba(var(--v-theme-secondary, 0.4));
}
.v-footer {
  padding: 16px;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
