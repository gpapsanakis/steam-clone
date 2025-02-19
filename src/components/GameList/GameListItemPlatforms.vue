<script setup lang="ts">
import { defineProps } from 'vue'
import { useDisplay } from 'vuetify'

const { platforms, releaseDate } = defineProps({
  platforms: Object,
  releaseDate: Object,
})
const { smAndDown } = useDisplay()
</script>

<template>
  <div class="d-flex" :class="{ 'flex-column': smAndDown, 'mx-auto': smAndDown }">
    <v-card-subtitle>{{ releaseDate.date }}</v-card-subtitle>
    <div class="d-flex mx-auto" :class="{ 'py-3': smAndDown }">
      <v-icon v-if="platforms?.linux" class="mr-2">mdi-linux</v-icon>
      <v-icon v-if="platforms?.windows" class="mr-2">mdi-microsoft-windows</v-icon>
      <v-icon v-if="platforms?.mac" class="mr-2">mdi-apple</v-icon>
    </div>
  </div>
</template>

<style scoped></style>
