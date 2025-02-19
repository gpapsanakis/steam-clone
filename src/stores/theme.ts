import { defineStore } from 'pinia'
import { ThemeState } from '@/types'

export const useThemeStore = defineStore<'theme', ThemeState>('theme', {
  state: () => ({
    isDark: true,
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
    },
  },
})
