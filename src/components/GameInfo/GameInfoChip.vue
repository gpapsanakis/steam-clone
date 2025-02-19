<script setup lang="ts">
import type { Category } from '@/types'

const props = defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-chip
      v-for="category in categories"
      :key="category.id"
      class="my-2 mx-1"
      label
      density="compact"
      size="small"
    >
      {{ category.description }}
    </v-chip>
  </div>
</template>

<style scoped></style>
