<script setup lang="ts"></script>

<template>
  <template v-for="i in 10" :key="i">
    <v-col cols="12">
      <v-skeleton-loader
        class="w-100 pa-2 flex-nowrap skeleton"
        elevation="12"
        min-height="120"
        type="image, paragraph, actions"
      ></v-skeleton-loader>
    </v-col>
  </template>
</template>

<style scoped>
.skeleton :deep(.v-skeleton-loader__image) {
  max-width: 200px;
  max-height: 100px;
  border-radius: 4px;
}

.skeleton :deep(.v-skeleton-loader__paragraph) {
  max-width: 40%;
}

.skeleton :deep(.v-skeleton-loader__actions) {
  align-self: flex-end;
}
</style>
