<script setup lang="ts">
const { gameCategories } = defineProps({
  gameCategories: Object,
})
</script>

<template>
  <v-chip
    v-for="category in gameCategories.slice(0, 5)"
    :key="category.id"
    class="my-2 mx-1"
    label
    density="compact"
    size="x-small"
  >
    {{ category.description }}
  </v-chip>
</template>

<style scoped></style>
