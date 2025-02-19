<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, ComputedRef, defineComponent } from 'vue'
import AppBar from './components/AppBar/AppBar.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useThemeStore } from './stores/theme'
import { TEXT } from '@/utils/constants'

defineComponent({
  components: {
    AppBar,
    VueQueryDevtools,
  },
})

const themeStore = useThemeStore()
const isDark: ComputedRef<boolean> = computed(() => themeStore.isDark)
</script>

<template>
  <v-app id="inspire" :theme="isDark ? 'dark' : 'light'">
    <AppBar />
    <RouterView />
    <v-footer :theme="isDark ? 'dark' : 'light'" height="44" app>
      {{ TEXT.footer }}
    </v-footer>
  </v-app>
  <VueQueryDevtools />
</template>

<style scoped></style>
