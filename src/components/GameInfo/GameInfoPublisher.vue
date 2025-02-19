<script setup lang="ts">
import { TEXT } from '@/utils/constants'

const { releaseDate, developers, publishers, website } = defineProps({
  releaseDate: String,
  developers: String,
  publishers: String,
  website: String,
})
</script>

<template>
  <v-list lines="two">
    <v-list-item :title="TEXT.releaseDate" :subtitle="releaseDate"></v-list-item>
    <v-list-item :title="TEXT.developer" :subtitle="developers"></v-list-item>
    <v-list-item :title="TEXT.publisher" :subtitle="publishers"></v-list-item>
    <v-list-item :title="TEXT.website">
      <template v-slot:subtitle>
        <a :href="website" target="_blank">{{ website }}</a>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped></style>
