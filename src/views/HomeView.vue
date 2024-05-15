<script setup lang="ts">
const imageUrl = import.meta.env.VITE_IMAGE_URL
</script>

<template>
  <v-container fluid>
    <v-img :lazy-src="imageUrl" :src="imageUrl" alt="Home Picture" cover />
    <v-col md-6>
      <v-card>
        <v-card-title>Hello!</v-card-title>
        <v-card-text
          >I earned my PhD in English Language and Linguistics in 2023, jointly awarded by the
          National University of Singapore and King’s College London. Trained as a sociolinguist,
          I’m most interested in discursive behaviour surrounding sex and sexuality, produced by
          and/or about non-heterosexual persons. I align my research interests with
          sociolinguistics, linguistic anthropology, and gender/sexuality studies; most of my
          published work tries to understand linguistic expressions of sex/uality in a variety of
          contexts. I also have interests in the critical study of language and race, the social
          theories of Michel Foucault, and queer theory. My doctoral work examines logics of change
          and transformation embedded in contemporary Christian discourses on sex and sexuality, and
          how they constitute a mode of neo-homophobia. I’m currently working on my first monograph
          on the same topic, as well as a second book project on truth-telling practices amongst
          gender/sexual minorities.</v-card-text
        >
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
