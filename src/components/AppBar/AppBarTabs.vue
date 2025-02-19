<script setup lang="ts">
import { TABS } from '@/utils/constants'
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'
import { computed, type ComputedRef } from 'vue'

const router = useRouter()
const selectTab = (route: string) => {
  router.push({ name: 'Home', query: { tab: route } })
}
const route = useRoute()

const modelTab: ComputedRef<string | null> = computed(() => route.query.tab as string | null)

const { mobile } = useDisplay()
</script>

<template>
  <v-tabs v-if="mobile && modelTab" grow center-active :model-value="modelTab" mobile show-arrows>
    <v-tab
      v-for="(tab, index) in TABS"
      :key="index"
      :value="tab.route"
      @click="selectTab(tab.route)"
      >{{ tab.title }}
    </v-tab>
  </v-tabs>
</template>

<style scoped></style>
