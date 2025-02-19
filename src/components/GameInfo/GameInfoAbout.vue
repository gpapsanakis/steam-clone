<script setup lang="ts">
import { ThemeInstance, useTheme } from 'vuetify'

const { aboutTheGame } = defineProps({
  aboutTheGame: String,
})

const theme: ThemeInstance = useTheme()
</script>

<template>
  <v-container
    :class="{ 'container-white': !theme.global.current.value.dark }"
    v-html="aboutTheGame"
  ></v-container>
</template>

<style scoped>
.container-white {
  background-color: #ffffff;
}

.v-container :deep(img) {
  max-width: 80%;
  margin: 0 24px;
  padding: 24px 0;
}
</style>
