<script setup lang="ts">
import { MENU_ITEMS } from '@/utils/constants'
import type { DisplayBreakpoint } from 'vuetify'
import { useDisplay } from 'vuetify'

const { mobile }: { mobile: DisplayBreakpoint } = useDisplay()
</script>

<template>
  <v-menu v-if="!mobile">
    <template v-slot:activator="{ props }">
      <v-avatar color="lime-accent-4" size="small" v-bind="props"
        ><span class="text-h7">{{ MENU_ITEMS.name }}</span>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title>{{ MENU_ITEMS.settings }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>{{ MENU_ITEMS.logout }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped></style>
