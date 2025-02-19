<script setup lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import AppBarTabs from './AppBarTabs.vue'
import AppBarIcon from './AppBarIcon.vue'
import AppBarButtons from './AppBarButtons.vue'
import AppBarMenu from './AppBarMenu.vue'
import { NAME } from '@/utils/constants'
import { useDisplay } from 'vuetify'
import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from 'vue-router'

defineComponent({
  components: {
    AppBarTabs,
    AppBarIcon,
    AppBarButtons,
    AppBarMenu,
  },
})

const route: RouteLocationNormalizedLoaded = useRoute()
const router: Router = useRouter()

const shouldShowBackBtn: ComputedRef<boolean> = computed(() => !route.query.tab)

const { mobile } = useDisplay()

const goBack = (): void => {
  router.go(-1)
}
</script>

<template>
  <v-app-bar height="72" flat>
    <AppBarIcon />
    <div v-if="shouldShowBackBtn" class="text-center">
      <v-btn color="lime-accent-4" prepend-icon="mdi-arrow-left" @click="goBack">
        <template v-slot:prepend>
          <v-icon></v-icon>
        </template>

        Go Back
      </v-btn>
    </div>
    <h3 v-if="!mobile" class="pl-4">{{ NAME.welcomeName }}</h3>
    <AppBarTabs />
    <v-spacer></v-spacer>
    <AppBarButtons />
    <AppBarMenu />
    <h5 v-if="!mobile" class="px-6">{{ NAME.wholeName }}</h5>
  </v-app-bar>
</template>

<style scoped></style>
