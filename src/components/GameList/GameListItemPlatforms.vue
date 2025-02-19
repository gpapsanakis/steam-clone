<script setup lang="ts">
const { platforms, releaseDate } = defineProps({
  platforms: Object,
  releaseDate: Object,
})
</script>

<template>
  <v-card-subtitle>{{ releaseDate.date }}</v-card-subtitle>
  <v-icon v-if="platforms?.linux" class="mr-2">mdi-linux</v-icon>
  <v-icon v-if="platforms?.windows" class="mr-2">mdi-microsoft-windows</v-icon>
  <v-icon v-if="platforms?.mac" class="mr-2">mdi-apple</v-icon>
</template>

<style scoped></style>
