<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { TABS } from '@/utils/constants'
import { computed } from 'vue'

const router = useRouter()

const selectTab = (route: string) => {
  router.push({ name: 'Home', query: { tab: route } })
}

const route = useRoute()

const modelTab = computed(() => [route.query.tab])
</script>

<template>
  <v-navigation-drawer class="navigation-drawer" floating>
    <v-list density="compact" nav :selected="modelTab">
      <v-list-item class="text-center" density="comfortable">
        <v-list-item-title class="font-weight-black">Browse Categories</v-list-item-title>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item
        v-for="(tab, index) in TABS"
        :key="index"
        class="text-center"
        rounded="xl"
        :title="tab.title"
        :value="tab.route"
        @click="selectTab(tab.route)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.navigation-drawer.v-theme--dark {
  background: linear-gradient(0deg, rgb(44, 48, 55) 0%, rgb(33, 33, 33) 100%);
}

.navigation-drawer.v-theme--light {
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
}
</style>
