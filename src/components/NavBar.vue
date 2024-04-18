<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  navBarTitle: String
})

console.log(props.navBarTitle)
</script>

<template>
  <v-layout>
    <v-app-bar location="top">
      <v-app-bar-title>{{ props.navBarTitle }}</v-app-bar-title>
    </v-app-bar>
  </v-layout>
</template>

<style scoped></style>
