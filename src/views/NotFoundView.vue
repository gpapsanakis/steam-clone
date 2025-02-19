<script setup lang="ts">
import logoSteam from '@/assets/logo_steam.svg'
</script>

<template>
  <v-main width="100vw">
    <v-empty-state
      headline="Whoops, 404"
      title="Page not found"
      text="The page you were looking for does not exist"
      :image="logoSteam"
    ></v-empty-state>
  </v-main>
</template>

<style scoped></style>
