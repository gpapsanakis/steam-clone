<script setup lang="ts">
const { aboutTheGame } = defineProps({
  aboutTheGame: String,
})
</script>

<template>
  <v-card
    class="mx-auto py-10 px-16 d-flex flex-column justify-start overflow-auto"
    elevation="24"
    height="100%"
    max-height="1200"
  >
    <v-card-text class="w-100" v-html="aboutTheGame"></v-card-text>
  </v-card>
</template>

<style scoped></style>
