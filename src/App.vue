<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, defineComponent } from 'vue'
import AppBar from './components/AppBar/AppBar.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { TEXT } from '@/utils/constants'
import { ThemeInstance, useTheme } from 'vuetify'

defineComponent({
  components: {
    AppBar,
    VueQueryDevtools,
  },
})

const theme: ThemeInstance = useTheme()
const activeTheme = computed(() => theme.global.name.value)
</script>

<template>
  <v-app id="inspire" :theme="activeTheme">
    <AppBar />
    <RouterView />
    <v-footer :theme="activeTheme" height="44" app>
      {{ TEXT.footer }}
    </v-footer>
  </v-app>
  <VueQueryDevtools />
</template>

<style scoped></style>
