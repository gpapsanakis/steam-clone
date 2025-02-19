<script setup lang="ts">
import logoSteam from '@/assets/logo_steam.svg'
import { useRouter } from 'vue-router'
import { DisplayBreakpoint, ThemeInstance, useDisplay, useTheme } from 'vuetify'
import { TABS } from '@/utils/constants'
import { computed } from 'vue'

const router = useRouter()
const goHome = () => {
  router.push({ name: 'Home', query: { tab: TABS[0].route } })
}

const { mobile }: { mobile: DisplayBreakpoint } = useDisplay()
const theme: ThemeInstance = useTheme()
const activeTheme = computed(() => theme.global.name.value)
</script>

<template>
  <v-icon @click="goHome" class="ma-4" v-if="mobile" size="x-large"> mdi-steam</v-icon>
  <v-img
    v-else
    alt="Steam"
    max-width="200"
    min-width="50"
    class="mx-5 cursor-pointer"
    :class="{ invert: activeTheme === 'light' }"
    :src="logoSteam"
    @click="goHome"
  />
</template>

<style scoped>
.invert {
  filter: invert(1);
}
</style>
