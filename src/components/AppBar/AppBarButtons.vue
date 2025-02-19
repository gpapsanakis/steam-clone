<script setup lang="ts">
import hackTheBox from '@/assets/hackthebox.svg'
import { ref, Ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { BUTTON, SNACKBAR } from '@/utils/constants'
import { useDisplay } from 'vuetify'

const themeStore = useThemeStore()

const toggleDarkMode = (): void => {
  themeStore.toggleTheme()
}

const snackbarInstall: Ref<boolean> = ref(false)
const closeSnackbarInstall = (): void => {
  snackbarInstall.value = false
}

const snackbarNotifications: Ref<boolean> = ref(false)
const closeSnackbarNotifications = (): void => {
  snackbarNotifications.value = false
}

const snackbarCart: Ref<boolean> = ref(false)
const closeSnackbarCart = (): void => {
  snackbarCart.value = false
}

const { mobile } = useDisplay()
</script>

<template>
  <div v-if="!mobile" class="d-flex align-center justify-space-around pr-5">
    <v-btn
      size="x-small"
      variant="flat"
      color="#4c6b22ff"
      prepend-icon="mdi-tray-arrow-down"
      @click="snackbarInstall = !snackbarInstall"
    >
      <template v-slot:prepend>
        <v-icon color="white"></v-icon>
      </template>
      {{ BUTTON.installSteam }}
    </v-btn>
    <v-btn class="text-none" stacked @click="snackbarNotifications = !snackbarNotifications">
      <v-badge color="error" content="2">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-btn class="text-none" stacked @click="snackbarCart = !snackbarCart">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn class="text-none" stacked @click="toggleDarkMode">
      <v-icon> mdi-brightness-6</v-icon>
    </v-btn>
  </div>
  <v-snackbar v-model="snackbarInstall" location="bottom" color="lime-accent-4" timeout="3000">
    <v-row dense>
      <v-img class="mr-2" width="20" :src="hackTheBox"></v-img>
      {{ SNACKBAR.steamInstall }}
    </v-row>
    <template v-slot:actions>
      <v-btn @click="closeSnackbarInstall">{{ BUTTON.close }}</v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="snackbarNotifications" location="bottom" color="error" timeout="3000">
    {{ SNACKBAR.notification }}
    <template v-slot:actions>
      <v-btn @click="closeSnackbarNotifications">{{ BUTTON.close }}</v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="snackbarCart" location="bottom" color="error" timeout="3000">
    {{ SNACKBAR.cart }}
    <template v-slot:actions>
      <v-btn @click="closeSnackbarCart">{{ BUTTON.close }}</v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
