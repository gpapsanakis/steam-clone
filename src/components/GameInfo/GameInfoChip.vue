<script setup lang="ts">
import type { Category } from '@/types'

const props = defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <div class="d-flex flex-wrap w-100 mx-auto px-10 py-5">
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
