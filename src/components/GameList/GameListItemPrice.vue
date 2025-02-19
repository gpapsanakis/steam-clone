<script setup lang="ts">
import { PriceOverview } from '@/types'
import { useDisplay } from 'vuetify'

const { priceOverview } = defineProps<{ priceOverview: PriceOverview }>()

const { mdAndUp, smAndDown } = useDisplay()
</script>

<template>
  <div
    v-if="priceOverview?.discount_percent"
    class="text-h6 discount"
    :class="{ 'position-absolute': mdAndUp, 'mx-auto': smAndDown }"
  >
    -{{ priceOverview?.discount_percent }}%
  </div>
  <div
    class="price"
    :class="{ 'position-absolute': mdAndUp, 'mx-auto': smAndDown }"
    v-if="priceOverview"
  >
    <div class="text-decoration-line-through font-weight-thin">
      {{ priceOverview.initial_formatted }}
    </div>
    <div class="text-h7 new-price" :class="{ 'mx-auto': smAndDown }">
      {{ priceOverview.final_formatted }}
    </div>
  </div>
</template>

<style scoped>
.discount {
  padding: 0.5rem;
  bottom: 5px;
  right: 100px;
  color: #beee11ff;
  background-color: #4c6b22ff;
  width: fit-content;
}

.price {
  padding: 0.5rem;
  bottom: 0;
  right: 10px;
  width: fit-content;
}

.new-price {
  color: #b1dd1a;
  width: fit-content;
}
</style>
